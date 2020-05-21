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
		]
  },
  {
    path: '/article-detail',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail/ArticleDetail.vue')
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
