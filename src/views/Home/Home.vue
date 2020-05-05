<template>
	<div class="home-bg">
		<div class="bg"></div>
		<div class="home">
			<banner ></banner>
			<div class="body-center clear" ref="left">
				
				<el-container>
					<el-aside width="200px" >
						<ranking :isFixed="isFixed"></ranking>
					</el-aside>
					<el-main>
						<list></list>
					</el-main>
					<el-aside width="200px" >
						<div >
							<hot-article :isFixed="isFixed"></hot-article>
						</div>
						
					</el-aside>
				</el-container>
			</div>
			
		</div>
	</div>
	
</template>

<script>
// @ is an alias to /src
import Banner from './components/banner.vue'
import List from './components/list.vue'
import Ranking from './components/ranking.vue'
import HotArticle from './components/hot_article.vue'
import Utils from '@/kun/utils/util.js'

export default {
	name: 'Home',
	components: {
		Banner,
		List,
		Ranking,
		HotArticle,
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
	.bg{
		background-color: $theme-color;
		position: absolute;
		width: 100%;
		height: 330px;
		left: 0;
		top: 0;
	}
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
