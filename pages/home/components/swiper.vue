<template>
	<view class="swiper_body">
		<uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
			<swiper circular class="swiper-box" @change="change" autoplay="true" :interval="2000" :duration="500">
				<swiper-item v-for="(item, index) in info" :key="index">
					<view :class="item.colorClass" class="swiper-item">
						<image class="image" :src="item.url"  />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
	
	
</template>

<script>
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		name:'homeSwiper',
		components: {
			uniSection,
			uniSwiperDot
		},
		data() {
			return {
				info: [{
						colorClass: 'uni-bg-red',
						url: '	',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				mode: 'round',
				dotsStyles:{
					backgroundColor: 'white',
					border: '1px white solid',
					color: '#fff',
					selectedBackgroundColor: '#2f78ff',
					selectedBorder: '1px #2f78ff solid',
					bottom:'10',
					height:'4'
				},
				current: 0,
				
			};
		},
		methods:{
			change(e) {
				this.current = e.detail.current
			},
			
			
		}
	}
</script>

<style scoped lang="scss">
.swiper_body{
	margin: 40upx auto 0 auto;
	width: 680upx;
	height: 382.5upx;
	border-radius: $uni-border-radius-lg;
	overflow: hidden;
	.swiper-box{
		width: 680upx;
		height: 382.5upx;
	}
	.image{
		width: 100%;
		border-radius: 20upx;
		overflow: hidden;
		height: 382.5upx;
	}
	
	
}
</style>
