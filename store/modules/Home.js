// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import api from '@/common/vmeitime-http/'
import store from '@/store'
import hk_base from '@/common/hk_base.js'

// import qs from 'qs'
// const default_footer_choose = localStorage.getItem('DEFAULT_FOOTER_CHOOSE')?localStorage.getItem('DEFAULT_FOOTER_CHOOSE'):'shouye'
// const common_token = uni.getStorageSync('COMMON_TOKEN')?uni.getStorageSync('COMMON_TOKEN'):'',
const common_token = hk_base.get_localstorage_judge_out_time('COMMON_TOKEN')?hk_base.get_localstorage_judge_out_time('COMMON_TOKEN'):''
const state = {
	common_token:common_token,
	is_start_already:false
  // introduction: '',
  
}

const mutations = {
	COMMON_TOKEN: (state, common_token) => {
		state.common_token = common_token
	},
	IS_START_ALREADY: (state, is_start_already) => {
		state.is_start_already = is_start_already
	},
}

const actions = {
  //进入页面的common-token
	async setCommonToken({ commit }) {
		let data = {
			app_class:'uni_app',
			url:'app'
		}
		// console.log(store.getters.common_token)
		if(!store.getters.common_token){
			let res = await api.common_token(data)
			// console.log(res)
			try {
			    // uni.setStorageSync('COMMON_TOKEN',  res.data.content.user_token);
				hk_base.set_localstorage_judge_out_time({
					name:'COMMON_TOKEN',
					value:res.data.content.user_token,
					expires:3600000
				})
				
			} catch (e) {
			    // error
			}
			commit('COMMON_TOKEN', res.data.content.user_token)
			
			return res.data.content.user_token
		}
	},
	/*启动页预加载首页信息*/
	async init({ commit }){
		let token = await store.dispatch('Home/setCommonToken');
		let timer = setTimeout(function(){
			commit('IS_START_ALREADY', true)
		},500)
		// commit('IS_START_ALREADY', 'true')
		// clearTimeout(timer);
	}

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}