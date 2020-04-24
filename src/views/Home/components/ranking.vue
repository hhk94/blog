<template>
	<div :class="{'home-rank':true,'fixed':this.isFixed}">
		<h1 class="title">灌水排行榜</h1>
		<div 
		:key="item.id"
		v-for="(item,index) of this.list"
		class="item">
			<div class="num">{{index}}</div>
			<div class="name">{{item.nick_name}}</div>
			<div class="total">{{item.has_comments_count}}</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import Admin from '@/kun/api/admin'
export default {
	name: 'Ranking',
	components: {
		
	},
	props:{
		isFixed:Boolean
	},
	data(){
		return {
			list:[]
		}
	},
	mounted() {
		this.user_list_get_by_count()
	},
	
	methods:{
		async user_list_get_by_count(){
			let result
			try {
				this.loading = true
				result = await Admin.user_list_get_by_count()
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.list = result.data.data 
				console.log(this.list )
			}
		},
	
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-rank{
	// float: left;
	width: 200px;
	// height: 100vh;
	background-color: white;
	&.fixed{
		position: fixed;
		top: 0;
	}
	// margin-right: 20px;
	.title{
		font-size: $uni-font-size-subtitle;
		text-align: center;
		height: 60px;
		line-height: 60px;
	}
	.item{
		display: flex;
		justify-content: space-between;
		padding: 0 10px 0 20px;
		height: 40px;
		line-height: 40px;
		&:hover{
			background: $uni-color-error;
			color: white;
			transition: all 0.3s;
			.num{
				color: white;
				transition: all 0.3s;
			}
		}
		div{
			text-align: center;
			font-size: $hk-litter;
		}
		.num{
			font-size: $uni-font-size-title;
			font-style: italic;
			color: $uni-color-primary;
		}
		.name{
			width: 50%;
			@include _one-line;
		}
		.total{
			width: 20%;
			overflow: hidden;
		}
	}
}
</style>
