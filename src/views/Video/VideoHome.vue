<template>
	<div class="life-body">
		<div class="no_date" v-if="this.list.length===0">暂无数据</div>
		<div class="home-list" v-else>
			<div class="list-item"
			v-for="item of this.list"
			:key="item.id"
			@click="go_to(item)"
			>
				<div class="cover">
					<img :src="item.video_img_url" alt="" >
				</div>
				<h1 class="title">{{item.title}}</h1>
			</div>
		</div>
	</div>
	
</template>

<script>
// @ is an alias to /src
import Video from '@/kun/api/video'
export default {
	name: 'LifeHome',
	components: {
	},
	data(){
		return {
			list:[],
		}
	},
	mounted() {
		this._initt()
	},
	methods:{
		async _initt(){
			await this.video_list_get()
		},
		async video_list_get() {
			const data = {
				show: 1
			}
			let result
			try {
				this.loading = true
				result = await Video.video_list_get(data)
			} catch (e) {
				// TODO handle the exception
				this.loading = false
			}
			if (result.data.state == window.g.SUCCESS_STATE) {
				this.loading = false
				this.list = result.data.data
			} else {
				this.loading = false
				this.$notify({
					title: '提示',
					message: result.msg,
					type: 'error'
				})
			}
		},
		go_to(item){
			let {jump_url} = item
			window.open(jump_url)
		}
	}
}
</script>

<style lang="scss" scoped>
.pag{
	margin: 20px auto;
	width: fit-content;
}
.no_date{
	margin-top: 50px;
	@include _no_date()
}
.home-list{
	overflow: hidden;
	// margin-right: 20px;
	// float:right;
	padding: 14px;
	width: 760px;
	min-height: 100vh;
	background-color: white;
	.list-item{
		overflow: hidden;
		position: relative;
		padding: 30px 30px;
		box-sizing: border-box;
		border: 1px solid $back-color;
		width: 220px;
		padding: 10px;
		float: left;
		margin-bottom: 10px;
		margin-right: 36px;
		border-radius: 5px;
		&:nth-child(3n){
			margin-right: 0;
		}
		.cover{
			width: 200px;
			height: 112px;
			background-color: gray;
			overflow: hidden;
		}
		.title{
			margin-top: 10px;
			text-align: left;
			font-size: 14px;
			line-height: 18px;
		}
	}
}
</style>
