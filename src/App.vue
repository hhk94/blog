<template>
	<div id="app">
		<div class="header">
			<div class="container clear">
				<div class="logo">
					<img src="@/assets/logo.png" alt="">
				</div>
				<div class="item-body clear">
					<div class="item">
						<img src="@/assets/img/login.png" alt="">
					</div>
					<div class="item">
						<img src="@/assets/img/share.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view/>
	</div>
</template>

<style lang="scss" scoped>
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
