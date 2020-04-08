<template>
	<div class="home-article">
		<h1 class="title">热门文章</h1>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水何坤灌水灌水何坤灌水灌水何坤灌水灌水何坤灌水灌水何坤灌水灌水何坤灌水灌水</div>
			
		</div>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水</div>
			
		</div>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水</div>
			
		</div>
		<div class="item">
			<div class="num">10</div>
			<div class="name">何坤灌水灌水</div>
			
		</div>
	</div>
</template>

<script>
// @ is an alias to /src


export default {
	name: 'HotArticle',
	components: {
		
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-article{
	float: right;
	width: 200px;
	height: 100vh;
	background-color: white;
	
	.title{
		font-size: $uni-font-size-paragraph;
		letter-spacing: 1px;
		font-weight: bold;
		text-align: left;
		height: 60px;
		line-height: 60px;
		position: relative;
		text-indent: 20px;
		&::after{
			position: absolute;
			
			height: 20px;
			display: block;
			content: '';
			width: 3px;
			background-color: $uni-color-primary;
			top: 20px;
			left: 10px;
		}
	}
	.item{
		
		justify-content: space-between;
		padding: 10px 10px 10px 0;
		height: 40px;
		// line-height: 40px;
		border-bottom: 1px solid $back-color;
		div{
			float: left;
			text-align: center;
			font-size: $hk-litter;
		}
		&:hover{
			background: $back-color;
			// color: white;
			transition: all 0.3s;
			// .num{
			// 	color: white;
			// 	transition: all 0.3s;
			// }
		}
		.num{
			font-size: $uni-font-size-title;
			font-style: italic;
			color: $uni-color-primary;
			height: 40px;
			line-height: 40px;
			text-align: center;
			width: 40px;
		}
		.name{
			font-size: $hk-mid;
			text-align: left;
			width: 150px;
			line-height: 20px;
			@include _over-line;
			font-weight: bold;
			letter-spacing: 1px;
		}
		
	}
}
</style>
