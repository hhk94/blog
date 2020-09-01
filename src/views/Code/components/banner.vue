<template>
	<div class="body">
		<div class="swiper-center" v-if="this.list.length!=0" >
			<swiper :options="swiperOption" ref="mySwiper" >
				
				<swiper-slide 
				:data_index="item.jump_url"
				v-for="(item) of list"
				:key="item.id"
				>
					<a >
						<img :src="item.banner_img_url" alt="">
					</a>
					
				</swiper-slide>
				
				<!-- <swiper-slide>
					<a >
						<img src="@/assets/img/1.jpg" alt="">
					</a>
					
				</swiper-slide> -->
				
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Banner from '@/kun/api/banner'
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
					delay: 5000,
					disableOnInteraction: false
				},
			},
			list:[]
	
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
		this.init()
		
	},
	methods:{
		async init(){
			await this.banner_list_get()
			// let _this = this;
			this.swiper.on('tap', function () {
				console.log('a')
				// _this.goToDetail(this.clickedSlide.getAttribute('data_index'));//调用你自定义的方法
				window.open(this.clickedSlide.getAttribute('data_index'))
			})
		},
		async banner_list_get(){
			let params = {
				banner_type_id:1
			}
			let result
			try {
				this.loading = true
				result = await Banner.banner_list_get(params)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.list = result.data.data 
				// console.log(this.list )
			}
		}
	}
}
</script>

<style scoped lang="scss">
.body{
	height: 675px;
	width: 100%;
}
</style>
