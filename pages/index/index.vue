<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item 
			v-for="item of bannerList"
			:key="item.id"
			>
				<view class="swiper-item">
					<image :src="item.img" mode="widthFix"></image>
				</view>
			</swiper-item>
			
		</swiper>
		
		<view>
            <text class="title">{{title}}</text>
        </view>
		
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				请点击按钮向服务器发起请求
			</view>
			<view class="uni-textarea uni-common-mt">
				<textarea :value="res"></textarea>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<button type="primary" @click="sendRequest" :loading="loading">发起请求</button>
				<button type="default" @click="sendRequest1" :loading="loading">发起请求(async/await)</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import store from '@/store'
	export default {
		data() {
			return {
				title: '网络请求',
				loading: false,
				res: '',
				bannerList:[]
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			async init(){
				// let data = {
				// 	app_class:'uni_app',
				// 	url:'app'
				// }
				// let res = await this.$api.common_token(data);
				// console.log(res)
				// token = res.content.user_token
				let common_token = await this.$store.dispatch('Home/setCommonToken');
				console.log(common_token)
				this.getBanner()
				
			},
			
			getBanner:function(){
				let data = {
					key: 'm_home_slider',
					user_token:this.$store.getters.common_token
				}
				this.$api.banner(data).then(res=>{
					console.log(res)
					this.bannerList = res.data.content
				})
				
			},
			
			// 方式一
			sendRequest: function() {
				this.loading = true
				this.$api.test({noncestr: Date.now()}).then((res)=>{
					this.loading = false;
					console.log('request success', res)
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true
					});
					this.res = '请求结果 : ' + JSON.stringify(res);
					console.log(this.$store.getters['common_token'])
				}).catch((err)=>{
					this.loading = false;
					console.log('request fail', err);
				})
			},
			
			//方式二
			async sendRequest1() {
				this.loading = true
				let res = await this.$api.test({noncestr: Date.now()});
				this.loading = false;
				this.res = '请求结果 : ' + JSON.stringify(res);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-test:blue;
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: $uni-color-success;
	}
	image{
		width: 100%;
		height: auto;
	}
</style>
