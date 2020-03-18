import Vue from 'vue'
import App from './App'

//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

Vue.config.productionTip = false

import api from '@/common/vmeitime-http/'
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
	// store,
    ...App
})
app.$mount()
