/*路由舞台配置*/
const homeRouter = [
	
	{
		id:0,//id - 用作左侧side导航循环key
		side_name: '首页',//side_name 左侧导航名称；路由中 mata - title字段
		name: 'Default',//路由名
		link: '/home/default',//路由path
		filePath: 'pages/Default/Default.vue',//路由import的文件地址
		icon: require('@/assets/img/icon/home.png'),//左侧side导航 主标题 - 图标；路由中 mata - icon 字段
		level:1,//导航等级，用于循环处理
		requireLogin:true//是否需要登录
	},
	{
		id:2,
		side_name: '文章相关',
		name: 'Article',
		link: null,
		filePath: null,
		icon: require('@/assets/img/icon/home.png'),
		level:1,
		children:[
			{
				id:1,//id - 用作左侧side导航 - 子导航 循环key
				side_name: '文章添加',//side_name 左侧 子导航 名称；路由中 mata - title字段
				name: 'ArticleAdd',//路由名
				link: '/home/article-add',//路由path
				filePath: 'pages/Article/ArticleAdd.vue',//路由import的文件地址
				level:2,//导航等级，用于循环处理
				requireLogin:true,//是否需要登录
				side_show:true//左侧导航是否显示
			},
			{
				id:2,
				side_name: '文章修改',
				name: 'ArticleEdit',
				link: '/home/article-edit',
				filePath: 'pages/Article/ArticleEdit.vue',
				level:2,
				requireLogin:true,//是否需要登录
				side_show:false//左侧导航是否显示
			},
			{
				id:3,
				side_name: '文章列表',
				name: 'ArticleEdit',
				link: '/home/article-list',
				filePath: 'pages/Article/ArticleList.vue',
				level:2,
				requireLogin:true,//是否需要登录
				side_show:true//左侧导航是否显示
			},
		]
	},
	
]

// let filter_router = []
// // 筛除已经被添加的插件
// function filter(data) {
// 	console.log("data")
// 	console.log(data)
// 	if (homeRouter.length === 0) {
// 		return
// 	}
// 	if (Array.isArray(data)) {
// 		data.forEach(item => {
// 				filter(item)
// 				// console.log(item)
// 		})
// 	} else {
// 		if(data.level==1){
// 			if (data.children) {
// 				filter_router.push(data)
// 			}else{	
// 			}
// 		}
// 	}
// }
// filter(homeRouter)

// console.log(filter_router)
export default homeRouter