<template>
	<div class="header" :style="opacityStyle" :class="{'fixed':this.isFixed}">
		<div  class="container clear">
			<!-- logo -->
			<div class="logo" @click="home()">
				<img src="@/assets/img/kun3.png" alt="">
			</div>
			<!-- index -->
			<div class="tab-body-global">
				<div 
				v-for="item in this.tabs"
				:key="item.name"
				@click="tabs_jump(item)"
				class="tab-item"
				:class="{'active':tabs_active.indexOf(item.path)!=-1}"
				>{{item.name}}</div>
				
			</div>
			<!-- user login -->
			<div class="item-body clear">
				<div class="item" 
				v-show="!this.$store.getters.token"
				@click="show_login">
					<img src="@/assets/img/login2.png" alt="">
				</div>
				<div class="item" v-if="this.$store.getters.token">
					<!-- <div class="circle"><img :src="this.$store.getters.token.app.avatar_img_url" alt=""></div> -->
					<el-dropdown>
						<span class="el-dropdown-link">
							<div class="avatar"><img :src="this.$store.getters.token.app.avatar_img_url" alt=""></div>
						</span>
						<el-dropdown-menu slot="dropdown" class="user-box">
							<div class="user-info">
								<div class="avatar1" >
									<img :src="this.$store.getters.token.app.avatar_img_url" alt="">
									<label class="mask" @click="change_user">
										<i class="el-icon-edit"></i>
									</label>
								</div>
								<div class="text">
									<div class="username">{{this.$store.getters.token.app.nick_name}}</div>
									<div class="desc">{{this.$store.getters.token.app.scope_description}}</div>
								</div>
								<img src="@/assets/img/header/corner.png" alt="" class="corner">
							</div>
							<ul class="dropdown-box">
								<li @click="change_user">
									<i class="el-icon-unlock"></i>
									<span>修改密码</span>
								</li>
								<li @click="login_out">
									<i class="el-icon-unlock"></i>
									<span>退出登录</span>
								</li>
							</ul>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Utils from '@/kun/utils/util.js'
export default {
	name: 'Header',
	components: {
		
	},
	data(){
		return{
			tabs:[
				{
					name:'Home',
					chinese:'首页',
					path:'/home'
				},
				{
					name:'Code',
					chinese:'代码',
					path:'/code'
				},
				{
					name:'Life',
					chinese:'生活',
					path:'/life'
				},
				{
					name:'Video',
					chinese:'视频',
					path:'/video'
				},
			],
			tabs_active:"/",
			//处理定位切换
			isFixed:false,
			wait: 100, // 2000ms之内不能重复发起请求
			throttleScroll: null, // 节流登录
			opacityStyle:{
				opacity:1
			}
		}
	},
	mounted() {
		this.throttleScroll = Utils.throttle(this.handleScroll, this.wait)
		window.addEventListener("scroll",this.throttleScroll);
	},
	destroyed: function () {
			window.removeEventListener('scroll', this.throttleScroll);   //  离开页面清除（移除）滚轮滚动事件
	},
	watch:{
		'$route':function(val){
			const {path} = val
			// console.log(path)
			this.tabs_active = path
		}
	},
	methods:{
		handleScroll() {
		//获取滚动时的高度
			let over = 60 + 5;//缓冲距离 = 导航高度+缓冲
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let opacity = 0
			if ( scrollTop<over*2 ) {
				this.opacityStyle = {
					opacity:1
				}
				this.isFixed = false
			}else{
				this.isFixed = true
				opacity = (scrollTop - over*2) /140
				// console.log(opacity)
				opacity = opacity > 1? 1 : opacity
				this.opacityStyle = {
					opacity
				}
			}
			// console.log('1')
		},
		//展示登录
		show_login(){
			this.$store.dispatch('Home/set_login_show',true)
		},
		//关闭登录
		close_f(){
			this.$store.dispatch('Home/set_login_show',false)
		},
		//回到首页
		home(){
			this.$router.push('/')
		},
		//登出
		login_out(){
			this.$store.dispatch('Config/loginOut')
			this.$router.push('/')
		},
		//修改资料
		change_user(){
			this.$router.push('/person-change')
		},
		//tabs跳转
		tabs_jump(item){
			const { path } = item
			// console.log(path)
			path&&this.$router.push(path)
			
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.header{
	height: 60px;
	background: $theme-header;
	&.fixed{
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
		position: fixed;
	}
	.container{
		width: $common-container;
		margin: 0 auto;
		.logo{
			float: left;
			width: 40px;
			margin: 10px 0;
		}
		.tab-body-global{
			float: left;
			margin-left:calc(1200px/2 - 40px );
			transform: translateX(-50%);
			display: flex;
			justify-content: flex-start;
			.tab-item{
				line-height: 60px;
				padding: 0 20px;
				text-align: center;
				font-size: $uni-font-size-title;
				cursor: pointer;
				color: $theme-color;
				transition: all 0.3s;
				&:hover{
					background-color: $theme-color;
					color: $theme-header;
				}
				&.active{
					background-color: $theme-color;
					color: $theme-header;
				}
			}
		}
		.item-body{
			float: right;
			height: 40px;
			margin: 10px;
			.item{
				margin: 5px 0;
				float: left;
				width: 30px;
				padding: 0 5px;
				border-left: 1px solid $back-color;
			}
			.item+.item{
				border-right: 1px solid $back-color;
				.circle{
					width: 30px;
					height: 30px;
					background-color: white;
					border-radius: 30px;
					overflow: hidden;
				}
			}
		}
	}
}
.user-box {
    width: 326px;
    background-color: none;
    background: transparent;
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
	.user-info{
		background-image: url('~@/assets/img/header/user-bg.png');
		background-size: 100% 100%;
		-webkit-transform: translateY(-10px);
		transform: translateY(-10px);
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		padding: 35px 20px 25px 30px;
		z-index: 100;
		position: relative;
		.avatar1{
			width: 80px;
			height: 80px;
			border-radius: 50%;
			cursor: pointer;
			overflow: hidden;
			position: relative;
			.mask{
				opacity: 0;
				-webkit-transition: all .2s;
				transition: all .2s;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,.3);
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				cursor: pointer;
				color: #fff;
			}
			&:hover{
				.mask{
					opacity: 1;
				}
			}
		}
		.text{
			margin-left: 20px;
			color: #fff;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			.username{
				margin-bottom: 10px;
				font-size: 16px;
			}
			.desc{
				font-size: 14px;
				color: #dee2e6;
			}
		}
		.corner{
			position: absolute;
			right: 8px;
			top: -9px;
			width: 27px;
			height: 10px;
		}
	}
	.dropdown-box{
		height: 122px;
		padding-left: 35px;
		color: #596c8e;
		font-size: 16px;
		background: #fff;
		margin-top: -10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		li{	
			cursor: pointer;
			margin-top: 20px;
			i{
				margin-right: 10px;
			}
		}
		li+li{
			margin-bottom: 20px;
		}
	}
}

</style>
