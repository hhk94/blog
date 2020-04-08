import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/resset.css'//自定义清零样式 - own clear css
//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
