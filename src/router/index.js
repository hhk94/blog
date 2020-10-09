import Vue from 'vue'
import VueRouter from 'vue-router'
// import CodeHome from '@/views/Code/Home.vue'
import Layout from '@/Layout'

Vue.use(VueRouter)

const routes = [
	{
		redirect: '/home',
		path: '/',
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home/Home.vue'),
	},
	// 第一版code首页方案，暂时弃用 含banner
	// {
	// 	path: '',
	// 	name: 'CodeHome',
	// 	component: CodeHome,
	// 	children:[
	// 		{
	// 			path: '/code/c-home',
	// 			name: 'List',
	// 			component: () => import('@/views/Code/components/list.vue')
	// 		},
			
		
	// 	]
	// },
	
	{
		path: '/code',
		name: 'Code',
		component: Layout,
		redirect:'/code/c-home',
		children:[
			{
				path: 'c-home',
				name: 'List',
				component: () => import('@/views/Code/list.vue')
			},
			{
				path: 'type-article/:id',
				name: 'TypeArticle',
				component: () => import('../views/TypeArticle/TypeArticle.vue')
			},
			
			{
				path: 'article-detail',
				name: 'ArticleDetail',
				component: () => import('../views/ArticleDetail/ArticleDetail.vue')
			},
			{
				path: 'person-change',
				name: 'ArticleDetail',
				component: () => import('../views/Personal/PersonalChange.vue')
			},
			{
				path: '/404',
				name: '404',
				component: () => import('../views/Error/404.vue')
			},
		]
	},
	{
		path: '/life',
		name: 'Life',
		component: Layout,
		redirect:'/life/l-home',
		children:[
			{
				path: 'l-home',
				name: 'LifeHome',
				component: () => import('@/views/Life/LifeHome.vue')
			},
			{
				path: 'type-article/:id',
				name: 'TypeArticle',
				component: () => import('../views/TypeArticle/TypeArticle.vue')
			},
		]
	},
	{
		redirect: '/404',
		path: '*',
	}
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
