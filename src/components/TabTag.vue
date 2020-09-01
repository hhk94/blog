<template>
	<div class="tag-body">
		<el-tag
		:key="item.id"
		v-for="item of article_type_list"
		@click="go_to_class(item)"
		>{{item.typename}}</el-tag>
	</div>
</template>

<script>
	import Article from '@/kun/api/article'
	export default {
		name: 'TabTag',
		components: {
			
		},
		data(){
			return {
				article_type_list:[],
				loading:false
			}
		},
		mounted() {
			this.article_type_list_get()
		},
		
		methods:{
			async article_type_list_get(){//获取文章分类列表
				let result 
				try{
					this.loading = true
					result = await Article.article_type_list_get()
				}catch(e){
					//TODO handle the exception
					this.loading = false
				}
				if(result.data.state==window.g.SUCCESS_STATE){
					this.loading = false
					this.article_type_list = result.data.data
				}else{
					this.loading = false
					this.$notify({
						title: '提示',
						message: result.data.msg,
						type:'error'
					});
				}
			},
			go_to_class(item){
				let {id} = item
				this.$router.push({
					path: `/code/type-article/${id}`,
					query: { type: item.typename }
				})
			}
		}
	}
	</script>

<style scoped="scoped">
.tag-body{
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	/* background-color: white; */
	padding: 10px;
}	
::v-deep .el-tag{
	margin-right: 10px;
	margin-bottom: 10px;
	cursor: pointer;
}
</style>
