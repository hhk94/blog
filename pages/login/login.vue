<template>
	<view class="content">
		<view>
			<view class="center">
				<image src="/static/logo1.jpg" mode="aspectFit" class="logo"></image>
			</view>
			<view class='word'>
				<view >申请获取以下权限</view>
				<text>获得你的公开信息(昵称，头像、地区等)</text>
			</view>
			<!-- #ifdef MP -->
			<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
				授权登录
			</button>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @click="wxGetUserInfo">
				授权登录
			</button>
			<!-- #endif -->
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
			};
		},
		onLoad() {
			this.login()
		},
		methods:{
			
			wxGetUserInfo:function() {
			
				// #ifdef H5
				console.log('a')
				uni.reLaunch({//信息更新成功后跳转到小程序首页
					url: '/pages/index/index'
				});
				// #endif
				
				// #ifdef MP
				console.log('b')
				let _this = this;
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						console.log(infoRes)
						let nickName = infoRes.userInfo.nickName; //昵称
						let avatarUrl = infoRes.userInfo.avatarUrl; //头像
						try {
							uni.setStorageSync('isCanUse', false);//记录是否第一次授权  false:表示不是第一次授权
							_this.updateUserInfo();
						} catch (e) {}
					},
					fail(res) {}
				});
				// #endif
				
				
			},
			login() {
				// #ifdef MP-WEIXIN
				// 1.wx获取登录用户code
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						console.log(loginRes)
						let code = loginRes.code;
						if (!_this.isCanUse) {
							//非第一次授权获取用户信息
							uni.getUserInfo({
								provider: 'weixin',
								success: function(infoRes) {
　　　　　　　　　　　　　　　　　　　　　　//获取用户信息后向调用信息更新方法
									let nickName = infoRes.userInfo.nickName; //昵称
									let avatarUrl = infoRes.userInfo.avatarUrl; //头像
										_this.updateUserInfo();//调用更新信息方法
								}
							});
						}
			
						//2.将用户登录code传递到后台置换用户SessionKey、OpenId等信息
						let data = {
							code: code,
						}
						_this.$api.wx_code(data).then(res=>{
							console.log(res)
							uni.hideLoading();
						})
						
					},
				});
				// #endif
				let _this = this;
			   
			},
			updateUserInfo() {
				let _this = this;
				let data = {
					appKey: this.$store.state.appKey,
					customerId: _this.customerId,
					nickName: _this.nickName,
					headUrl: _this.avatarUrl
				}
				this.$api.wx_updateUserInfo(data).then(res=>{
					console.log(res)
					if (res.data.state == "success") {
						uni.reLaunch({//信息更新成功后跳转到小程序首页
							url: '/pages/index/index'
						});
					}
					
				})
				
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.content{
	// position: relative;
	overflow: hidden;
	.center{
		height: 300upx;
		margin: 80upx 50upx ;
		border-bottom: 1px solid $uni-border-color;
		.logo{
			height: 200upx;
			width: 200upx;
			margin: 0 0 0 225upx;
			border-radius: 20upx;
		}
	}
	.word{
		margin: 0 50upx 80upx 50upx;
		view{
			font-size:$uni-font-size-lg;
			color: $uni-color-title;
		}
		text{
			font-size:$uni-font-size-base;
			color: $uni-text-color-grey;
		}
	}
	.bottom{
		border-radius: 80rpx;
		margin: 70rpx 50rpx;
		font-size: 35rpx;
	}
	
	
}

</style>
