import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/resset.css'//自定义清零样式 - own clear css

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//elementUI
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import './kun/plugins/element'

//animate
 import animated from 'animate.css' // npm install animate.css --save安装，再引入
 Vue.use(animated)

//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入


// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start()
	if (to.path.indexOf('life')!=-1) {
	//empty
	store.dispatch('Config/set_default_type','life')
	} else {
	//empty
	store.dispatch('Config/set_default_type','code')
	}
  next()
})

router.afterEach(() => {
  NProgress.done()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
