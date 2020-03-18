<template>
	<view class="grid">
		<uni-grid :column="4" :show-border="false" :square="false" @change="change">
			<uni-grid-item v-if="index < 6" v-for="(item ,index) in list" :index="index" :key="index">
				<view class="grid-item-box">
					<image class="image" :src="item.url" mode="aspectFill" />
					<text class="text">{{item.text}}</text>
					<view v-if="item.badge" class="grid-dot">
						<uni-badge :text="item.badge" :type="item.type" />
					</view>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniBadge from '@/components/uni-badge/uni-badge.vue'
	export default {
		name:'homeGrid',
		components: {
			uniGrid,
			uniGridItem,
			uniBadge
		},
		
		data() {
			return {
				list: [{
						url: '/static/036-alarm.png',
						text: '打卡签到',
						badge: '0',
						type: "primary",
						href:'/pages/calendar/calendar'
					},
					{
						url: '/static/034-to-do.png',
						text: '单词表',
						badge: '1',
						type: "success",
						href:'/pages/word_list_index/word_list_index'
					},
					{
						url: '/static/c3.png',
						text: '试题自测',
						badge: 'hot',
						type: "error"
					},
					{
						url: '/static/c4.png',
						text: 'Grid 4',
						badge: '2',
						type: "error"
					},
					
				]
			};
		},
		methods:{
			change(e) {
				let {
					index
				} = e.detail
				// this.list[index].badge && this.list[index].badge++
				// console.log(e)
				uni.navigateTo({
				    url: this.list[index].href
				});
				
				// uni.showToast({
				// 	title: `点击第${index+1}个宫格`,
				// 	icon: 'none'
				// })
			},
		}
	}
</script>

<style scoped lang="scss">
.grid{
	width: 680upx;
	margin: 0 auto;
}
.grid-item-box {
	flex: 1;
	/* position: relative;
*/
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15upx 0;
}
.grid-dot {
	position: absolute;
	top: 5upx;
	right: 20upx;
}

.image {
	width: 50upx;
	height: 50upx;
}

.text {
	font-size: $uni-font-size-base;
	margin-top: 10upx;
}
</style>
