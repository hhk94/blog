<template>
	<div id="app">
		<div class="header">
			<div class="container clear">
				<div class="logo">
					<img src="@/assets/logo.png" alt="">
				</div>
				<div class="item-body clear">
					<div class="item" @click="show_login">
						<img src="@/assets/img/login.png" alt="">
					</div>
					<div class="item">
						<img src="@/assets/img/share.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<login v-show="this.show" @close="close_f"></login>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view/>
	</div>
</template>
<script>
import Login from '@/components/Login.vue'
export default {
	name: 'Home',
	components: {
		
		Login
	},
	data(){
		return{
			show:false
		}
	},
	methods:{
		show_login(){
			this.show = true
		},
		close_f(){
			this.show = false
		}
	}
}
</script>
<style lang="scss" scoped>
::v-deep .markdown-body img{
		max-width: 100%;
		box-sizing: content-box;
		background-color: transparent;
		width: auto;
		height: auto;
		vertical-align: middle;
		border: 0;
		margin: 5px auto;
		padding-bottom: 20px;
		border-bottom: 1px solid #d9d9d9;
	}
body{
	background-color: $back-color!important;
}
#app {
	
	.header{
		height: 60px;
		background: $theme-color;
		.container{
			width: $common-container;
			margin: 0 auto;
			.logo{
				float: left;
				width: 40px;
				margin: 10px 0;
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
				}
			}
		}
	}
}


</style>
