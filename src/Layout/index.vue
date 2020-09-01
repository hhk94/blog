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
			<div class="body-center clear" ref="left">
				
				<el-container>
					<el-aside width="200px" >
						<app-left :isFixed="isFixed"></app-left>
					</el-aside>
					<el-main>
						<app-main></app-main>
					</el-main>
					<el-aside width="200px" >
						<app-right :isFixed="isFixed"></app-right>
					</el-aside>
				</el-container>
			</div>
		</div>
	</div>
	
</template>

<script>
// @ is an alias to /src
import Utils from '@/kun/utils/util.js'
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
			isFixed:false,
			wait: 100, // 2000ms之内不能重复发起请求
			throttleScroll: null, // 节流登录
		}
	},
	mounted() {
		this.throttleScroll = Utils.throttle(this.handleScroll, this.wait)
		window.addEventListener("scroll",this.throttleScroll);
	},
	destroyed: function () {
		window.removeEventListener('scroll', this.throttleScroll);   //  离开页面清除（移除）滚轮滚动事件
	},
	methods:{
		handleScroll() {
		//获取滚动时的高度
			let over = 40;//缓冲距离
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let oneHeight = this.$refs.left.offsetTop +over ;//元素到父级顶部的距离
			// let oneHeight = this.$refs.left.offsetHeight ;//元素自身的高度
			if (scrollTop > oneHeight) {
			//这是滑动到scrollTwo的距离要做的操作
				// console.log('超过左边')
				// console.log(scrollTop)
				this.isFixed = true
			}else{
				this.isFixed = false
			}
			// console.log('1')
		},
		
	}
}
</script>

<style lang="scss" scoped>
.el-aside {

}

::v-deep .el-main {
	padding-top: 0;
}
.home-bg{
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
