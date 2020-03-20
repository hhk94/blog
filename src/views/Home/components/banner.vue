<template>
	<div class="body">
		<div class="swiper-center" >
			<swiper :options="swiperOption" ref="mySwiper">
				
				<!-- <swiper-slide 
				:data_index="item.jump"
				v-for="(item,index) of bannerList"
				:key="index"
				>
					<a >
						<img :src="item.img" alt="">
					</a>
					
				</swiper-slide> -->
				<swiper-slide>
					<a >
						<img src="@/assets/img/1.jpg" alt="">
					</a>
					
				</swiper-slide>
				
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'Banner',
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			
			swiperOption: {
				pagination: {
					el: '.swiper-pagination',
					dynamicBullets: true
				},
				loop: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
			},
	
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
	props:{
		bannerList:Array
	},
	mounted() {
		let _this = this;
		this.swiper.on('tap', function () {
			// _this.goToDetail(this.clickedSlide.getAttribute('data_index'));//调用你自定义的方法
			if(this.clickedSlide.getAttribute('data_index')=='zx'){
				window.open('https://tb.53kf.com/code/stat/0e0881fb4bf9cb323abd9dff7089b4290/1')
			}else{
				_this.$router.push({path:'/spacial/spacial-'+this.clickedSlide.getAttribute('data_index')}).catch(err => {err})
				
			}
			
		})
	}
}
</script>

<style scoped lang="scss">
.body{
	height: 675px;
	width: 100%;
}
</style>
