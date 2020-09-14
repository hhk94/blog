<template>
	<div class="life-body">
		<div class="no_date" v-if="this.article_list.length===0">暂无数据</div>
		<div class="home-list" v-else>
			<div class="list-item"
			v-for="item of this.article_list"
			:key="item.id"
			
			>
				<h1 
				@click="go_to_detail(item.id)"
				class="title">{{item.article_title}}</h1>
				<div class="tag-body clear">
					<div class="tag-item clear">
						<div class="logo"><img src="@/assets/img/riqi.png" alt=""></div>
						<div class="word">Post:{{item.update_time}}</div>
					</div>
					<div class="tag-item clear">
						<div class="logo wjj"><img src="@/assets/img/wjj.png" alt=""></div>
						<div class="word">In: <router-link :to="{ path: '/code/type-article/'+item.belong_article_type.id +'?type='+item.belong_article_type.typename}">{{item.belong_article_type.typename}}</router-link> </div>
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
	</div>
	
</template>

<script>
// @ is an alias to /src
import Article from '@/kun/api/article'
export default {
	name: 'LifeHome',
	components: {
	},
	data(){
		return {
			article_list:[],
			total:10,//总数
			current_page:1,//当前页
			per_page:10,//一页显示数
			article_belong_id:null
		}
	},
	mounted() {
		this._initt()
	},
	methods:{
		async _initt(){
			await this.get_article_belong_id()
			await this.article_list_get()
		},
		async get_article_belong_id(){
			let params = {
				name:this.$store.state.Config.default_type
			}
			let result
			try {
				this.loading = true
				result = await Article.article_belong_get(params)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.loading = false
				this.article_belong_id = result.data.data.id
			}
		},
		async article_list_get(){
			let data = {
				size:this.per_page,
				page:this.current_page,
				article_belong_id:this.article_belong_id
			}
			let result
			try {
				this.loading = true
				result = await Article.article_list_get(data)
			} catch (e) {
				this.loading = false
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.loading = false
				this.article_list = result.data.data
				this.current_page = result.data.current_page
				this.total = result.data.total
				// this.per_page =parseInt(result.data.data.per_page); 
				// console.log(this.article_list)
			}
		},
		go_to_detail(id){
			console.log(id)
			this.$router.push({path:'/code/article-detail',query:{id:id}})
		},
		handleCurrentChange(val){//页码改变
			this.current_page = val
			this.article_list_get()
		},
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
	width: 760px;
	min-height: 100vh;
	background-color: white;
	.list-item{
		overflow: hidden;
		// height: 200px;
		position: relative;
		padding: 30px 30px;
		// margin: 20px 40px;
		box-sizing: border-box;
		border-bottom: 1px solid $back-color;
		// background-color: black;
		&:hover{
			background: #fafafa;
		}
		.title{
			font-size: $uni-font-size-subtitle;
			color:$uni-color-title ;
			cursor: pointer;
			padding-bottom: 10px;
			
			font-weight: bold;
			letter-spacing: 2px;
			&:hover{
				color: #ca0c16;
			}
		}
		.tag-body{
			// border-bottom: 1px solid $back-color;
			// margin-bottom: 20px;
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
			
			// .hidden-bg{
			// 	background:linear-gradient(-180deg,hsla(0,0%,100%,0),#fff 70%);
			// 	height: 100px;
			// }
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
