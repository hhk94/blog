
import api from '@/common/vmeitime-http/'
import hk_base from '@/common/hk_base.js'
const WHICH_DICT = hk_base.get_localstorage_judge_out_time('WHICH_DICT')?hk_base.get_localstorage_judge_out_time('WHICH_DICT'):''
const READ_MODEL_VALUE = hk_base.get_localstorage_judge_out_time('READ_MODEL_VALUE')?hk_base.get_localstorage_judge_out_time('READ_MODEL_VALUE'):''//单词模式value
const READ_MODEL_LABEL = hk_base.get_localstorage_judge_out_time('READ_MODEL_LABEL')?hk_base.get_localstorage_judge_out_time('READ_MODEL_LABEL'):''//单词模式展示文字
const READ_ORDER_VALUE = hk_base.get_localstorage_judge_out_time('READ_ORDER_VALUE')?hk_base.get_localstorage_judge_out_time('READ_ORDER_VALUE'):''//排序模式value
const READ_ORDER_LABEL = hk_base.get_localstorage_judge_out_time('READ_ORDER_LABEL')?hk_base.get_localstorage_judge_out_time('READ_ORDER_LABEL'):''//排序模式展示文字

const PAGE = hk_base.get_localstorage_judge_out_time('PAGE')?hk_base.get_localstorage_judge_out_time('PAGE'):'0'//初始页码
const state = {
	page:PAGE,
	
	read_model:READ_MODEL_VALUE,
	read_model_label:READ_MODEL_LABEL,
	
	read_order:READ_ORDER_VALUE,
	read_order_label:READ_ORDER_LABEL,
	
	which_dict:WHICH_DICT
  
  
}

const mutations = {
	
	PAGE: (state, page) => {
		state.page = page
	},
	
	READ_MODEL: (state, read_model) => {
		state.read_model = read_model
	},
	READ_MODEL_LABEL: (state, read_model_label) => {
		state.read_model_label = read_model_label
	},
	
	READ_ORDER: (state, read_order) => {
		state.read_order = read_order
	},
	READ_ORDER_LABEL: (state, read_order_label) => {
		state.read_order_label = read_order_label
	},
	
	WHICH_DICT: (state, which_dict) => {
		state.which_dict = which_dict
	},
}

const actions = {
  
	//test 模拟用户设置单词表
	test({commit}){
		commit('PAGE',1)
		commit('READ_MODEL','read_num@50')
		commit('READ_ORDER','word_asc')
		commit('WHICH_DICT','siji')
	},

	//which_dict
	dictionary({commit},type){
		commit('WHICH_DICT',type)
		// console.log(type)
		try {
		    // uni.setStorageSync('WHICH_DICT',type);
			hk_base.set_localstorage_judge_out_time({
				name:'WHICH_DICT',
				value:type,
			})
		} catch (e) {
		    // error
		}
	},
	//read_model
	read_model({commit},model){
		commit('READ_MODEL',model.value)
		commit('READ_MODEL_LABEL',model.label)
		// console.log(model)
		try {
		    // uni.setStorageSync('READ_MODEL_VALUE',model.value);
			// uni.setStorageSync('READ_MODEL_LABEL',model.label);
			hk_base.set_localstorage_judge_out_time({
				name:'READ_MODEL_VALUE',
				value:model.value,
			})
			hk_base.set_localstorage_judge_out_time({
				name:'READ_MODEL_LABEL',
				value:model.label,
			})
		} catch (e) {
		    // error
		}
	},
	//read_order
	read_order({commit},model){
		commit('READ_ORDER',model.value)
		commit('READ_ORDER_LABEL',model.label)
		// console.log(model)
		try {
		    // uni.setStorageSync('READ_ORDER_VALUE',model.value);
			// uni.setStorageSync('READ_ORDER_LABEL',model.label);
			hk_base.set_localstorage_judge_out_time({
				name:'READ_ORDER_VALUE',
				value:model.value,
			})
			hk_base.set_localstorage_judge_out_time({
				name:'READ_ORDER_LABEL',
				value:model.label,
			})
		} catch (e) {
		    // error
		}
	},
	//which_dict
	page({commit},page_num){
		commit('PAGE',page_num)
		console.log(page_num)
		try {
		    // uni.setStorageSync('PAGE',page_num);
			hk_base.set_localstorage_judge_out_time({
				name:'PAGE',
				value:page_num,
			})
		} catch (e) {
		    // error
		}
	},
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}