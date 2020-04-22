<template>
	<div class="header">
		<div class="container clear">
			<div class="logo">
				<img src="@/assets/img/kun3.png" alt="">
			</div>
			<div class="item-body clear">
				<div class="item" 
				v-show="!this.$store.getters.token"
				@click="show_login">
					<img src="@/assets/img/login.png" alt="">
				</div>
				<div class="item" v-show="this.$store.getters.token">
					<div class="circle"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	components: {
		
	},
	data(){
		return{
			
		}
	},
	mounted() {
		console.log(this.$store.getters.token)
	},
	methods:{
		show_login(){
			this.$store.dispatch('Home/set_login_show',true)
		},
		close_f(){
			this.$store.dispatch('Home/set_login_show',false)
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
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
</style>
