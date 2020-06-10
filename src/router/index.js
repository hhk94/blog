import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children:[
			{
				path: '',
				name: 'List',
				component: () => import('../views/Home/components/list.vue')
			},
			{
				path: 'person-change',
				name: 'ArticleDetail',
				component: () => import('../views/Personal/PersonalChange.vue')
			},
		
		]
	},
	{
		path: '',
		name: 'TypeHome',
		component: () => import('../views/TypeArticle/TypeHome.vue'),
		children:[
			{
				path: 'type-article/:id',
				name: 'TypeArticle',
				component: () => import('../views/TypeArticle/TypeArticle.vue')
			},
			{
				path: '/404',
				name: '404',
				component: () => import('../views/Error/404.vue')
			},
			
		]
	},
	{
		path: '/article-detail',
		name: 'ArticleDetail',
		component: () => import('../views/ArticleDetail/ArticleDetail.vue')
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
