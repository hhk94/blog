<template>
	<div class="home">
		
		<div class="body-center clear">
			<ranking></ranking>
			<hot-article></hot-article>
			<div>
				<!-- 文章主体 -->
				<div class="home-list">
					<div class="list-item">
						<h1 class="title">{{this.article_title}}</h1>
						<div class="tag-body clear">
							<div class="tag-item clear">
								<div class="logo"><img src="@/assets/img/riqi.png" alt=""></div>
								<div class="word">Post:{{this.update_time}}</div>
							</div>
							<div class="tag-item clear">
								<div class="logo wjj"><img src="@/assets/img/wjj.png" alt=""></div>
								<div class="word">In: <a href="">{{this.belong_article_type.typename}}</a> </div>
							</div>
							<div class="tag-item clear">
								<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
								<div class="word">Comments: <a href="">7</a> </div>
							</div>
							<div class="tag-item clear">
								<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
								<div class="word">作者: {{this.belong_user.nick_name}} </div>
							</div>
						</div>
						<div class="center" >
							<mavon-editor
							v-model="article_content" 
							:toolbarsFlag="false"
							:boxShadow="false"
							:defaultOpen="'preview'"
							:subfield="false"
							class="edit"
							/>
						</div>
					</div>
					<!-- 评论列表 -->
					<div class="comment">
						<h1 class="t1">评论列表 <span class="add-comment" @click="add_comment(0)">撰写评论</span></h1>
						<div class="comment-list">
							<div class="comment-item">
								<div class="person-logo">
									<img src="" alt="">
								</div>
								<div class="word">
									<h1 class="name">616761951@qq.com</h1>
									<h2 class="time">2020-04-07</h2>
									<div class="replay">
										<span class="detail">我说了啥</span>
									</div>
									<div class="answer">回复</div>
								</div>
							</div>
							<div class="comment-item">
								<div class="person-logo">
									<img src="" alt="">
								</div>
								<div class="word">
									<h1 class="name">331@qq.com</h1>
									<h2 class="time">2020-04-07</h2>
									<div class="replay">
										<span class="detail">你是不是憨批</span>
										<span class="user">//@616761951@qq:</span><span class="detail">我说了啥</span>
									</div>
									<div class="answer">回复</div>
								</div>
							</div>
							
							
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		
	</div>
</template>

<script>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// @ is an alias to /src
import Article from '@/kun/api/article'
import Ranking from '../Home/components/ranking.vue'
import HotArticle from '../Home/components/hot_article.vue'
export default {
	name: 'Home',
	components: {
		Ranking,
		HotArticle,
		mavonEditor
	},
	data(){
		return {
			article_id:'a',
			article_content:'a',
			article_title:'a',
			belong_article_type:{
				typename:'a',
				id:'a'
			},
			belong_user:{
				nick_name:'a',
				id:'a'
			},
			update_time:'',
			coments:[]
		}
	},
	mounted() {
		this.article_id = this.$route.query.id
		console.log(this.$route.query.id)
		this.get_article_detail()
		this.get_article_comments()
	},
	methods:{
		// 所有操作都会被解析重新渲染 - 编辑区发生改变
		change(value, render){
			// render 为 markdown 解析后的结果[html]
			console.log(render)
			this.html = render;
		},
		async get_article_detail(){
			let params = {
				id:this.article_id 
			}
			let result
			try {
				result = await Article.article_get(params)
			} catch (e) {
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				console.log(result)
				// this.content = result.data.data.article_content
				this.article_title = result.data.data.article_title
				this.article_content = result.data.data.article_content
				this.belong_article_type = result.data.data.belong_article_type
				this.belong_user = result.data.data.belong_user
				this.update_time = result.data.data.update_time
			}
		},
		add_comment(tid){
			let data = {
				article_id:this.article_id,//文章id
				tid:tid//回复上级id
			}
			console.log(data)
		},
		async get_article_comments(){
			let params = {
				article_id:this.article_id 
			}
			let result
			try {
				result = await Article.article_comments_get(params)
			} catch (e) {
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				console.log(result)
				this.coments = result.data.data
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	
.home{
	width: $common-container;
	margin: 0 auto;
	// background-color: white;
	.body-center{
		margin-top: 20px;
	}
}
.home-list{
	margin-right: 20px;
	float:right;
	width: 760px;
	min-height: 100vh;
	background-color: white;
	.list-item{
		min-height: 400px;
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
		
	}
}

.comment{
	padding: 20px;
	.t1{
		font-size: $uni-font-size-title;
		color: $uni-color-subtitle;
		padding-bottom: 20px;
		border-bottom: 1px solid $back-color;
		.add-comment{
			float: right;
			font-size: $uni-font-size-paragraph;
			width: 100px;
			height: 30px;
			background-color: $uni-color-primary;
			color: white;
			line-height: 30px;
			text-align: center;
			border-radius: 30px;
			cursor: pointer;
			&:hover{
				opacity: 0.8;
			}
			&:active{
				opacity: 0.6;
			}
		}
	}
	.comment-list{
		margin: 20px;
		.comment-item{
			padding: 20px;
			overflow: hidden;
			border-bottom: 1px solid $back-color;
			.person-logo{
				float: left;
				width: 80px;
				height: 80px;
				border-radius: $uni-border-radius-circle;
				overflow: hidden;
				background-color: gold;
			}
			.word{
				float: left;
				padding: 0 20px;
				width: 500px;
				.name{
					font-size: $uni-font-size-paragraph;
					color: $uni-color-subtitle;
					font-weight: bold;
				}
				.time{
					margin-top: 10px;
					font-size: $hk-litter;
					color: $hk-litter-color;
				}
				.replay{
					margin-top: 10px;
					font-size: $hk-mid;
					color: $uni-color-paragraph;
					.detail{
						font-size: $hk-mid;
						color: $uni-color-paragraph;
					}
					.user{
						color:$uni-color-warning;
						cursor: pointer;
					}
				}
				.answer{
					margin-top: 20px;
					float: right;
					font-size:$hk-litter;
					width: 50px;
					height: 20px;
					background-color: $uni-color-primary;
					color: white;
					line-height: 20px;
					text-align: center;
					border-radius: 20px;
					cursor: pointer;
					&:hover{
						opacity: 0.8;
					}
					&:active{
						opacity: 0.6;
					}
					
				}
			}
		}
	}
}
</style>
