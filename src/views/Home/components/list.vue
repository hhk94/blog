<template>
	<div class="home-list">
		<div class="list-item">
			<h1 class="title">这里是标题</h1>
			<div class="tag-body clear">
				<div class="tag-item clear">
					<div class="logo"><img src="@/assets/img/riqi.png" alt=""></div>
					<div class="word">Post:2019-06-09</div>
				</div>
				<div class="tag-item clear">
					<div class="logo wjj"><img src="@/assets/img/wjj.png" alt=""></div>
					<div class="word">In: <a href="">code</a> </div>
				</div>
				<div class="tag-item clear">
					<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
					<div class="word">Comments: <a href="">7</a> </div>
				</div>
			</div>
			<div class="center">
				a关于我们
			</div>
			<div class="hidden">
				<div class="hidden-bg"></div>
				<div class="more clear">
					<div>Read More</div>
				</div>
			</div>
		</div>
		<div class="list-item">
			<h1 class="title">这里是标题</h1>
			<div class="tag-body clear">
				<div class="tag-item clear">
					<div class="logo"><img src="@/assets/img/riqi.png" alt=""></div>
					<div class="word">Post:2019-06-09</div>
				</div>
				<div class="tag-item clear">
					<div class="logo wjj"><img src="@/assets/img/wjj.png" alt=""></div>
					<div class="word">In: <a href="">code</a> </div>
				</div>
				<div class="tag-item clear">
					<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
					<div class="word">Comments: <a href="">7</a> </div>
				</div>
			</div>
			<div class="center">
				a关于我们
			</div>
			<div class="hidden">
				<div class="hidden-bg"></div>
				<div class="more clear">
					<div>Read More</div>
				</div>
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
	margin-right: 20px;
	float:right;
	width: 760px;
	min-height: 100vh;
	background-color: white;
	.list-item{
		height: 400px;
		position: relative;
		padding: 30px 30px;
		// margin: 20px 40px;
		box-sizing: border-box;
		border-bottom: 1px solid $theme-color;
		// background-color: black;
		.title{
			font-size: $uni-font-size-subtitle;
			color:$uni-color-title ;
			
			padding-bottom: 10px;
			
			font-weight: bold;
			letter-spacing: 2px;
		}
		.tag-body{
			border-bottom: 1px solid $back-color;
			margin-bottom: 20px;
			.tag-item{
				
				height: 30px;
				float: left;
				margin-right:20px;
				div{
					font-size: $hk-mid;
					float: left;
				}
				.logo{
					
					width: 30px;
					&.wjj{
						margin-right: 4px;
						margin-top: 2px;
						width: 20px;
					}
					&.taolun{
						margin-right: 4px;
						margin-top: 2px;
						width: 20px;
					}
				}
				.word{
					margin-top: 6px;
				}
			}
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
				div{
					float: right;
					font-size: $uni-font-size-subtitle;
					margin: 0 20px 20px 0;
					cursor: pointer;
					&:hover{
						color: $uni-color-primary;
					}
				}
			}
		}
	}
}
</style>
