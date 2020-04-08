<template>
	<div class="home-rank">
		<h1 class="title">灌水排行榜</h1>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水</div>
			<div class="total">665</div>
		</div>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水</div>
			<div class="total">665</div>
		</div>
		<div class="item">
			<div class="num">1</div>
			<div class="name">何坤灌水灌水何坤灌水灌水</div>
			<div class="total">665</div>
		</div>
		<div class="item">
			<div class="num">10</div>
			<div class="name">何坤灌水灌水</div>
			<div class="total">665</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src


export default {
	name: 'Ranking',
	components: {
		
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-rank{
	float: left;
	width: 200px;
	height: 100vh;
	background-color: white;
	margin-right: 20px;
	.title{
		font-size: $uni-font-size-subtitle;
		text-align: center;
		height: 60px;
		line-height: 60px;
	}
	.item{
		display: flex;
		justify-content: space-between;
		padding: 0 10px 0 20px;
		height: 40px;
		line-height: 40px;
		&:hover{
			background: $uni-color-error;
			color: white;
			transition: all 0.3s;
			.num{
				color: white;
				transition: all 0.3s;
			}
		}
		div{
			text-align: center;
			font-size: $hk-litter;
		}
		.num{
			font-size: $uni-font-size-title;
			font-style: italic;
			color: $uni-color-primary;
		}
		.name{
			width: 50%;
			@include _one-line;
		}
		.total{
			width: 20%;
			overflow: hidden;
		}
	}
}
</style>
