<template>
	
		<div :class="{'home-login':true,'animating1':this.judge=='Sign in','animating2':this.judge=='Sign up'}">
			<div class="close" @click="close">X</div>
			<h1 class="title">{{this.judge}}</h1>
			<div class="center">
				<div class="email">
					<el-input placeholder="请输入您的邮箱" v-model="email" @input="email_change" >
						<template slot="prepend">Http://</template>
					</el-input>
					<img 
					src="@/assets/img/logo2-x.png" 
					alt="" 
					class="email-x" 
					
					v-show="this.show_emial_x"
					@click="clear_input_email">
				</div>
				
				<div class="psd">
					<el-input
					placeholder="请输入密码"
					v-model="psd"
					show-password
					>
					</el-input>
				</div>
				<el-button type="primary" class='submit' v-if="this.judge=='Sign in'" @click="login_submit()">登录</el-button>
				<el-button type="primary" class='submit' v-else @click="sign_submit()">注册</el-button>
			</div>
			<div class="change">
				<span :class="{'active':this.judge=='Sign in'}" @click="change('Sign in')">立即登录</span>/
				<span :class="{'active':this.judge=='Sign up'}" @click="change('Sign up')">立即注册</span>
			</div>
			<span class="forget" v-show="this.judge=='Sign in'">忘记密码</span>
		</div>
	
</template>

<script>
// @ is an alias to /src

import Admin from '@/kun/api/admin'
export default {
	name: 'Login',
	components: {
		
	},
	data(){
		return{
			email:"hk",
			show_emial_x:false,
			psd:'20120942',
			judge:'Sign in'
		}
	},
	methods:{
		email_change(e){
			if(e.length > 0){
				this.show_emial_x = true
			}else{
				this.show_emial_x = false
			}
		},
		clear_input_email(){
			this.email = '';
			this.show_emial_x = false
		},
		change(item){
			this.judge = item
		},
		close(){
			this.$store.dispatch('Home/set_login_show',false)
			
		},
		async login_submit(){
			let data = {
				appid:this.email,
				appsecret:this.psd
			}
			let result
			try {
				this.loading = true
				result = await Admin.user_login(data)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.$store.dispatch('Home/set_token',result.data.data)
				this.$store.dispatch('Home/set_login_show',false)
				this.$message({
					type: 'success',
					message: '登录成功!'
				});
			}else{
				this.$notify({
				title: '提示',
				message: result.data.msg
				});
			}
		},
	}
}
</script>

<style scoped="scoped" lang="scss">
@keyframes hk_flip_in {
  from {
    -webkit-transform:   translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform:  translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform:   translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }



  to {
    -webkit-transform: translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform:  translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}	
@keyframes hk_flip_out {
  from {
    -webkit-transform: translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform:  translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }


  50% {
    -webkit-transform:   translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform:  translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform:   translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform:  translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
	
.animating1{
	animation: hk_flip_in 0.5s 1 ;
}
.animating2{
	animation: hk_flip_out 0.5s 1 ;
}
.home-login{
	position: fixed;
	left: 50%;
	top: 50%;
	margin-top: -200px;
	margin-left: -200px;
	width: 400px;
	height: 400px;
	background-color: white;
	z-index: 9999;
	box-shadow: 0 0 20px 0 $back-color;
	border-radius: $uni-border-radius-lg;
	overflow: hidden;
	.close{
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: $uni-font-size-title;
		cursor: pointer;
		color: $theme-color;
	}
	.title{
		text-align: center;
		color: $theme-color;
		font-size: $uni-font-size-title;
		margin-top: 60px;
	}
	.center{
		// margin-top: 10px;
		padding: 40px;
		.email{
			position: relative;
			.email-x{
				position: absolute;
				right:5px;
				top: 50%;
				transform: translateY(-50%);
				width: 20px;
				height: 20px;
			}
		}
		.psd{
			margin-top: 20px;
		}
		.submit{
			width: 100%;
			margin-top: 20px;
		}
	}
	.change{
		position: absolute;
		right:40px;
		bottom: 80px;
		span{
			color: $uni-color-primary;
			cursor: pointer;
		}
		.active{
			color: black;
			cursor:auto ;
		}
	}
	.forget{
		position: absolute;
		left:40px;
		bottom: 80px;
		color: $uni-color-primary;
		cursor: pointer;
	}
}
</style>
