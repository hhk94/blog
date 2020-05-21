<template>
	<div class="home-list">
		<div class="sec-header">
			<el-breadcrumb separator-class="el-icon-arrow-right" ref="test1">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-if="this.type">{{this.type.typename}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="list-item"
		v-for="item of this.article_list"
		:key="item.id"
		>
			<h1 class="title">{{item.article_title}}</h1>
			<div class="tag-body clear">
				<div class="tag-item clear">
					<div class="logo"><img src="@/assets/img/riqi.png" alt=""></div>
					<div class="word">Post:{{item.update_time}}</div>
				</div>
				<div class="tag-item clear">
					<div class="logo wjj"><img src="@/assets/img/wjj.png" alt=""></div>
					<div class="word">In: <router-link :to="{ path: '/type-article/'+item.belong_article_type.id }">{{item.belong_article_type.typename}}</router-link> </div>
				</div>
				<div class="tag-item clear">
					<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
					<div class="word">Comments: <a href="">{{item.has_comments_count}}</a> </div>
				</div>
				<div class="tag-item clear">
					<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
					<div class="word">作者: {{item.belong_user.nick_name}} </div>
				</div>
			</div>
			<div class="center">
				<mavon-editor
				v-model="item.article_content" 
				:toolbarsFlag="false"
				:boxShadow="false"
				:defaultOpen="'preview'"
				:subfield="false"
				@change="change" 
				class="edit"
				/>
			</div>
			<div class="hidden">
				<div class="hidden-bg"></div>
				<div class="more clear">
					<div @click="go_to_detail(item.id)">Read More</div>
				</div>
			</div>
		</div>
		<el-pagination
		@current-change="handleCurrentChange"
		class="pag"
		background
		layout="prev, pager, next"
		:current-page="this.current_page"
		:page-size="this.per_page"
		:total="this.total">
		</el-pagination>
	</div>
</template>

<script>
// @ is an alias to /src

// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Article from '@/kun/api/article'
export default {
	name: 'TypeArticle',
	//注册
	components:{
		mavonEditor
	},
	data(){
		return {
			article_list:[],
			total:10,//总数
			current_page:1,//当前页
			per_page:10,//一页显示数
			article_type_id:null,
			type:null
		}
	},
	watch:{
		'$route.params.id'(val){
			this.article_type_id = val
			
			this.article_list_get_by_type()
			console.log(val)
			let timer = setInterval(() => {
				document.documentElement.scrollTop -=100
				if (document.documentElement.scrollTop === 0) {
					clearInterval(timer)
				}
			}, 20);
		}
	},
	
	mounted(){
		this.article_type_id = this.$route.params.id
		this.article_list_get_by_type()
		this.article_type_get()
		let timer = setInterval(() => {
			document.documentElement.scrollTop -=100
			if (document.documentElement.scrollTop === 0) {
				clearInterval(timer)
			}
		}, 20);
	},
	methods:{
		handleCurrentChange(val){//页码改变
			this.current_page = val
			this.article_list_get_by_type()
		},
		// 所有操作都会被解析重新渲染 - 编辑区发生改变
		change(value, render){
			// render 为 markdown 解析后的结果[html]
			// console.log(render)
			this.html = render;
		},
		async article_list_get_by_type(){
			let data = {
				id:this.article_type_id,
				size:this.per_page,
				page:this.current_page
			}
			let result
			try {
				this.loading = true
				result = await Article.article_list_get_by_type(data)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.loading = false
				this.article_list = result.data.data.data
				this.current_page = result.data.current_page
				this.total = result.data.total
				this.per_page =parseInt(result.data.data.per_page); 
				// console.log(this.article_list)
			}
		},
		async article_type_get(){
			let data = {
				id:this.article_type_id,
			}
			let result
			try {
				this.loading = true
				result = await Article.article_type_get(data)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.type = result.data.data
			}
		},
		go_to_detail(id){
			console.log(id)
			this.$router.push({path:'/article-detail',query:{id:id}})
		}
	}
}
</script>

<style scoped="scoped" lang="scss">
.pag{
	margin: 20px auto;
	width: fit-content;
}
.home-list{
	overflow: hidden;
	// margin-right: 20px;
	// float:right;
	width: 760px;
	min-height: 100vh;
	background-color: white;
	.sec-header{
		background-color: #e1f0ff;
		border-bottom: 1px solid #eee;
		padding: 10px 5px;
		margin: 5px;
	}
	.list-item{
		overflow: hidden;
		height: 400px;
		position: relative;
		padding: 30px 30px;
		// margin: 20px 40px;
		box-sizing: border-box;
		border-bottom: 1px solid $theme-color;
		// background-color: black;
		.title{
			font-size: $uni-font-size-subtitle;
			color:$uni-color-title ;
			
			padding-bottom: 10px;
			
			font-weight: bold;
			letter-spacing: 2px;
		}
		.tag-body{
			border-bottom: 1px solid $back-color;
			margin-bottom: 20px;
			.tag-item{
				
				height: 30px;
				float: left;
				margin-right:20px;
				div{
					font-size: $hk-mid;
					float: left;
				}
				.logo{
					
					width: 30px;
					&.wjj{
						margin-right: 4px;
						margin-top: 2px;
						width: 20px;
					}
					&.taolun{
						margin-right: 4px;
						margin-top: 2px;
						width: 20px;
					}
				}
				.word{
					margin-top: 6px;
				}
			}
		}
		
		.center{
			font-size: 16px;
			width: 100%;
			
			// height: 200px;
		}
		.hidden{
			position: absolute;
			width: 100%;
			z-index: 2000;
			// background-color: white;
			left: 0;
			bottom: 0;
			
			.hidden-bg{
				background:linear-gradient(-180deg,hsla(0,0%,100%,0),#fff 70%);
				height: 100px;
			}
			.more{
				background-color: white;
				div{
					float: right;
					font-size: $uni-font-size-subtitle;
					margin: 0 20px 20px 0;
					cursor: pointer;
					&:hover{
						color: $uni-color-primary;
					}
				}
			}
		}
	}
}
</style>
