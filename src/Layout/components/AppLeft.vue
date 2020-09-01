<template>
  <div class="app-left">
	<div class="need_fix" ref="left" :class="{'fixed':this.isFixed}">
		<ranking ></ranking>
	</div>
    
  </div>
</template>

<script>
import Utils from '@/kun/utils/util.js'
import Ranking from '@/views/Code/components/ranking.vue'
export default {
  name: 'AppLeft',
  components:{
	Ranking
  },
  data(){
	return {
		isFixed:false,
		wait: 100, // 2000ms之内不能重复发起请求
		throttleScroll: null, // 节流登录
		true_height_flag:true,//用来保存第一次触发时，元素在页面正确的位置
		true_height:'',//用来保存第一次触发时，元素在页面正确的位置
	}
  },
  mounted() {
	this.throttleScroll = Utils.throttle(this.handleScroll, this.wait)
	window.addEventListener("scroll",this.throttleScroll);
	// console.log(this)
  },
	destroyed: function () {
		window.removeEventListener('scroll', this.throttleScroll);   //  离开页面清除（移除）滚轮滚动事件
	},
  methods:{
	handleScroll() {
	//获取滚动时的高度
		let over = 60  + 60 + 5;//缓冲距离 = 导航高度+导航渐变高度+过渡
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		// let oneHeight = this.$refs.left.offsetTop +over ;//元素到父级顶部的距离
		if(this.true_height_flag){
			//由于数据渲染，之后在此处获取的距离 才为真实距离
			this.true_height = this.$refs.left.offsetTop +over
			this.true_height_flag = false
			// console.log(this.true_height)
		}
		// let oneHeight = this.$refs.left.offsetHeight ;//元素自身的高度
		if (scrollTop > this.true_height ) {
			this.isFixed = true
		}else{
			this.isFixed = false
		}
		// console.log('1')
	},
  }
}
</script>

<style scoped lang="scss">
.need_fix.fixed{
	position: fixed;
	top: 80px;
}
</style>

