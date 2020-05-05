<template>
	<div :class="{'home-article':true,'fixed':this.isFixed}" >
		<div class="top">
			<h1 class="title">热门文章</h1>
			<div 
			class="item"
			v-for="(item,index) of this.list"
			:key="item.id"
			@click="go_to_detail(item.id)"
			>
				<div class="num">{{index}}</div>
				<div class="name">{{item.article_title}}</div>
				
			</div>
		</div>
		<introduction></introduction>
	</div>
</template>

<script>
// @ is an alias to /src
import introduction from '@/components/Introduction.vue'
import Article from '@/kun/api/article'
export default {
	name: 'HotArticle',
	components: {
		introduction
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
		this.article_list_get_by_count()
	},
	methods:{
		async article_list_get_by_count(){
			let result
			try {
				this.loading = true
				result = await Article.article_list_get_by_count()
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.list = result.data.data 
				console.log(this.list )
			}
		},
		go_to_detail(id){
			this.$router.push({path:'/article-detail',query:{id:id}})
		}
	}
}
</script>

<style scoped="scoped" lang="scss">
.home-article{
	// float: right;
	width: 200px;
	// height: 100vh;
	
	&.fixed{
		position: fixed;
		top: 0;
	}
	.top{
		background-color: white;
	}
	.title{
		font-size: $uni-font-size-paragraph;
		letter-spacing: 1px;
		font-weight: bold;
		text-align: left;
		height: 60px;
		line-height: 60px;
		position: relative;
		text-indent: 20px;
		&::after{
			position: absolute;
			
			height: 20px;
			display: block;
			content: '';
			width: 3px;
			background-color: $uni-color-primary;
			top: 20px;
			left: 10px;
		}
	}
	.item{
		cursor: pointer;
		justify-content: space-between;
		padding: 10px 10px 10px 0;
		height: 40px;
		// line-height: 40px;
		border-bottom: 1px solid $back-color;
		div{
			float: left;
			text-align: center;
			font-size: $hk-litter;
		}
		&:hover{
			background: $back-color;
			// color: white;
			transition: all 0.3s;
			// .num{
			// 	color: white;
			// 	transition: all 0.3s;
			// }
		}
		.num{
			font-size: $uni-font-size-title;
			font-style: italic;
			color: $uni-color-primary;
			height: 40px;
			line-height: 40px;
			text-align: center;
			width: 40px;
		}
		.name{
			font-size: $hk-mid;
			text-align: left;
			width: 150px;
			line-height: 20px;
			@include _over-line;
			font-weight: bold;
			letter-spacing: 1px;
		}
		
	}
}
</style>
