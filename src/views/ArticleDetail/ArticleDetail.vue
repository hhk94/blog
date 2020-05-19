<template>
	<div class="home">
		<el-backtop :bottom="100">
		<div
		style="{
		height: 100%;
		width: 100%;
		background-color: #f2f5f6;
		box-shadow: 0 0 6px rgba(0,0,0, .12);
		text-align: center;
		line-height: 40px;
		border-radius: 10px;
		color: #1989fa;
		}"
		>
		UP
		</div>
		</el-backtop>
		<div class="body-center clear" ref="left">
			
			
			<el-container>
				<el-aside width="200px" >
					<ranking :isFixed="isFixed"></ranking>
				</el-aside>
				<el-main>
					<div>
						<!-- 文章主体 -->
						<div class="home-list">
							<div class="sec-header">
								<el-breadcrumb separator-class="el-icon-arrow-right" ref="test1">
								<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
								<el-breadcrumb-item>{{this.article_title}}</el-breadcrumb-item>
								</el-breadcrumb>
							</div>
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
										<div class="word">Comments: <a href="">{{this.total}}</a> </div>
									</div>
									<div class="tag-item clear">
										<div class="logo taolun"><img src="@/assets/img/taolun.png" alt=""></div>
										<div class="word">作者: {{this.belong_user.nick_name}} </div>
									</div>
								</div>
								<!-- :toolbarsFlag="false" -->
								<div class="center" >
									<mavon-editor
									
									v-model="article_content" 
									:boxShadow="false"
									:defaultOpen="'preview'"
									:subfield="false"
									:toolbars="toolbars"
									class="edit"
									/>
								</div>
							</div>
							<!-- 评论列表 -->
							<div class="comment">
								<h1 class="t1">评论列表 <span class="add-comment" @click="add_comment(0)">撰写评论</span></h1>
								<div class="comment-list">
									<div class="no_comments" v-show="this.total==0">暂无评论,快来抢占沙发吧~</div>
									<!-- <img src="@/assets/img/comments.gif" alt=""> -->
									<div 
									class="comment-item"
									v-for="item of this.comments"
									:key="item.id"
									>
										<div class="person-logo">
											<img :src="item.belong_user.avatar_img_url" alt="">
										</div>
										<div class="word">
											<h1 class="name">{{item.belong_user.nick_name}}</h1>
											<h2 class="time">{{item.update_time}}</h2>
											<div class="replay">
												<span class="detail">{{item.comment_content}}</span>
												<div class="old_user" 
												v-for="item2 of item.father_list"
												:key="item2.id"
												>
													<span class="user">//@{{item2.belong_user.nick_name}}:</span><span class="detail">{{item2.comment_content}}</span>
												</div>
												
											</div>
											<div class="answer" @click="add_comment(item.id)">回复</div>
										</div>
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
					
				</el-main>
				<el-aside width="200px" >
					<hot-article :isFixed="isFixed"></hot-article>
				</el-aside>
			</el-container>
		</div>
		<el-dialog title="评论" 
		:visible.sync="dialogFormVisible" 
		center top="45vh" :modal="false" 
		:modal-append-to-body="false"
		width="500px">
		<el-form >
			<el-input
			type="textarea"
			:rows="2"
			placeholder="请输入内容"
			v-model="textarea">
			</el-input>
		</el-form>
		<div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible = false">取 消</el-button>
		<el-button type="primary" @click="comment_push()">确 定</el-button>
		</div>
		</el-dialog>
	</div>
</template>

<script>
import Utils from '@/kun/utils/util.js'
import { Storage } from '@/kun/utils/storage'
var storage = new Storage();
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
			article_id:'a',//文章id
			article_content:'a',//文章内容
			article_title:'a',//文章标题
			belong_article_type:{//文章分类
				typename:'a',
				id:'a'
			},
			belong_user:{//文章作者
				nick_name:'a',
				id:'a'
			},
			update_time:'',//修改时间
			comments:[],//评论列表
			dialogFormVisible:false,//评论表单
			textarea:'',//评论内容
			tid:'',//回复上级id
			current_page:1,
			per_page:5,
			total:0,
			toolbars: {
			// navigation: true, // 导航目录
			},
			isFixed:false,
			wait: 100, // 2000ms之内不能重复发起请求
			throttleScroll: null, // 节流登录
		}
	},
	watch: {
		'$route' () {
			this.init()
		}
	},
	mounted() {
		this.init()
		this.throttleScroll = Utils.throttle(this.handleScroll, this.wait)
		window.addEventListener("scroll",this.throttleScroll);
		
	},
	destroyed: function () {
		window.removeEventListener('scroll', this.throttleScroll);   //  离开页面清除（移除）滚轮滚动事件
	},
	methods:{
		handleScroll() {
		//获取滚动时的高度
			let over = 40;//缓冲距离
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			let oneHeight = this.$refs.left.offsetTop +over ;//元素到父级顶部的距离
			// let oneHeight = this.$refs.left.offsetHeight ;//元素自身的高度
			if (scrollTop > oneHeight) {
			//这是滑动到scrollTwo的距离要做的操作
				// console.log('超过左边')
				// console.log(scrollTop)
				this.isFixed = true
			}else{
				this.isFixed = false
			}
			// console.log('1')
		},
		init(){
			let timer = setInterval(() => {
				document.documentElement.scrollTop -=10
				if (document.documentElement.scrollTop === 0) {
					clearInterval(timer)
				}
			}, 20);
			this.article_id = this.$route.query.id
			this.get_article_detail()
			this.get_article_comments()
		},
		// 所有操作都会被解析重新渲染 - 编辑区发生改变
		change(value, render){
			// render 为 markdown 解析后的结果[html]
			// console.log(render)
			this.html = render;
		},
		async get_article_detail(){//获取文章详情
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
		add_comment(tid){//点击回复评论
			let data = storage.get_storage('USER_INFO')
			console.log(data)
			if(data){
				this.user_id = data.app.id
				this.tid = tid
				this.dialogFormVisible = true
			}else{
				let that = this
				this.$notify.error({
					title: '错误',
					message: '请先登录再评论',
					onClose:function(){
						that.$store.dispatch('Home/set_login_show',true)
					}
				});
			}
		},
		async comment_push(){//提交回复评论
			if(this.textarea.length==0){
				this.$notify.error({
					title: '错误',
					message: '请填写回复内容'
				});
				return;
			}
			let data = {
				article_id:this.article_id,//文章id
				tid:this.tid,//回复上级id
				comment_content:this.textarea,
				user_id:this.user_id
			}
			let result
			try {
				result = await Article.article_comments_add(data)
			} catch (e) {
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				this.dialogFormVisible = false
				this.get_article_comments()
				this.textarea = ''
			}else{
				this.$notify.error({
					title: '错误',
					message: result.data.msg
				});
			}
		},
		//获取文章评论
		async get_article_comments(){
			let params = {
				article_id:this.article_id,
				size:this.per_page,
				page:this.current_page
			}
			let result
			try {
				result = await Article.article_comments_get(params)
			} catch (e) {
				console.log(e)
			}
			if(result.data.state==window.g.SUCCESS_STATE){
				console.log(result)
				this.comments = result.data.data.data
				this.current_page = result.data.current_page
				this.total = result.data.total
				this.per_page =parseInt(result.data.data.per_page); 
			}
		},
		handleCurrentChange(val){//页码改变
			this.current_page = val
			this.get_article_comments()
		},
	}
}
</script>

<style lang="scss" scoped>
::v-deep .el-main {
	padding-top: 0;
}
.home{
	width: $common-container;
	margin: 0 auto;
	// background-color: white;
	.body-center{
		margin-top: 20px;
	}
}
.home-list{
	// margin-right: 20px;
	float:right;
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
		min-height: 400px;
		position: relative;
		padding: 20px 30px;
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
		.no_comments{
			padding-top: 100px;
			position: relative;
			text-align: center;
			color: #bfbfbf;
			font-size: $uni-font-size-paragraph;
			&::after{
				position: absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				content: '';
				display: block;
				width: 100px;
				height: 100px;
				background: url(../../assets/img/comments.gif) no-repeat center center/contain;
			}
		}
		.comment-item{
			padding: 20px;
			overflow: hidden;
			border-bottom: 1px solid $back-color;
			.person-logo{
				box-shadow: 0 0 10px 0 #ececec;
				float: left;
				width: 80px;
				height: 80px;
				border-radius: $uni-border-radius-circle;
				overflow: hidden;
				// background-color: gold;
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
					span{
						line-height: 20px;
					}
					.detail{
						font-size: $hk-mid;
						color: $uni-color-paragraph;
					}
					.old_user{
						display: inline;
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
::v-deep .pag{
	margin: 20px auto;
	width: fit-content;
}
</style>
