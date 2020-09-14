// import store from '@/store'
// import { Storage } from '@/kun/utils/storage'
// var storage = new Storage();
import { Token } from '@/kun/utils/token'
var tokens = new Token();
let token = tokens.get_token()?tokens.get_token():'';
const state = {
	token:token,
	default_type:"code"//用于判断加载不同归属文章
}

const mutations = {
	TOKEN: (state, token) => {
		state.token = token
	},
	DEFAULT_TYPE:(state,default_type)=>{
		state.default_type = default_type
	}
}

const actions = {
	set_token({ commit },params) {//登录获取token
		console.log('store')
		// if(!store.getters.token){
			
		// }
		tokens.set_token(params)
		commit('TOKEN', params)
		
	},
	
	loginOut({ commit }){
		tokens.remove_token()
		commit('TOKEN', '')
	},
	set_default_type({commit},type){
		commit('DEFAULT_TYPE', type)
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}