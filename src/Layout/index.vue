<template>
	<div class="home-bg">
		<el-backtop :bottom="100">
		<div
		style="{
		height: 100%;
		width: 100%;
		background-color: #f2f5f6;
		box-shadow: 0 0 6px rgba(0,0,0, .12);
		text-align: center;
		line-height: 40px;
		border-radius: 10px;
		color: #1989fa;
		}"
		>
		UP
		</div>
		</el-backtop>
		<div class="home">
			<div class="body-center clear" >
				
				<el-container>
					<el-aside width="200px" >
						<app-left ></app-left>
					</el-aside>
					<el-main>
						<app-main></app-main>
					</el-main>
					<el-aside width="200px" >
						<app-right ></app-right>
					</el-aside>
				</el-container>
			</div>
		</div>
	</div>
	
</template>

<script>
// @ is an alias to /src
import { AppMain,AppLeft,AppRight } from './components'

export default {
	name: 'LayOut',
	components: {
		AppMain,
		AppLeft,
		AppRight
	},
	data(){
		return {
		}
	},
}
</script>

<style lang="scss" scoped>
.el-aside {

}

::v-deep .el-main {
	padding-top: 0;
}
.home-bg{
	// margin-top: 80px;//导航高度
	position: relative;
	width: 100%;
	.home{
		width: $common-container;
		margin: 0 auto;
		// background-color: white;
		.body-center{
			margin-top: 20px;
		}
	}
}

</style>
