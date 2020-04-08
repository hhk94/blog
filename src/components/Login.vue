<template>
	<div class="home-login">
		<h1 class="title">Sign in</h1>
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
			<el-button type="primary" class='submit'>主要按钮</el-button>
		</div>
		<div class="change">
			<span :class="{'active':this.judge=='in'}">立即登录</span>/
			<span>立即注册</span>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src


export default {
	name: 'Login',
	components: {
		
	},
	data(){
		return{
			email:"",
			show_emial_x:false,
			psd:'',
			judge:'in'
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
		}
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-login{
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate3d(-50%,-50%,0);
	width: 400px;
	height: 400px;
	background-color: white;
	z-index: 9999;
	box-shadow: 0 0 20px 0 $back-color;
	border-radius: $uni-border-radius-lg;
	overflow: hidden;
	.title{
		text-align: center;
		color: $theme-color;
		font-size: $uni-font-size-title;
		margin-top: 30px;
	}
	.center{
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
		bottom: 124px;
		span{
			color: $uni-color-primary;
			cursor: pointer;
		}
		.active{
			color: black;
			cursor:auto ;
		}
	}
	
}
</style>
