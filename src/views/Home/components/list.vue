<template>
	<div class="home-list">
		<div class="list-item">
			<h1 class="title">这里是标题</h1>
			<div class="center">
				a关于我们
			</div>
			<div class="hidden">
				<div class="hidden-bg"></div>
				<div class="more">Read More</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
// @ is an alias to /src


export default {
	name: 'List',
	components: {
		
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-list{
	min-height: 100vh;
	.list-item{
		height: 600px;
		position: relative;
		padding: 20px 40px;
		margin: 20px 40px;
		box-sizing: border-box;
		border-bottom: 1px solid $theme-color;
		background-color: black;
		.title{
			font-size: 22px;
			color:$uni-color-title ;
			border-bottom: 1px solid $back-color;
			padding-bottom: 20px;
			margin-bottom: 10px;
		}
		.center{
			font-size: 16px;
			width: 100%;
			// height: 200px;
		}
		.hidden{
			position: absolute;
			width: 100%;
			
			// background-color: white;
			left: 0;
			bottom: 0;
			
			.hidden-bg{
				background:linear-gradient(-180deg,hsla(0,0%,100%,0),#fff 70%);
				height: 100px;
			}
			.more{
				background-color: white;
			}
		}
	}
}
</style>
