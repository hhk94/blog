import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	// http.interceptor.response = (response) => {
	// 	console.log('个性化response....')
	// 	//判断返回状态 执行相应操作
	// 	return response;
	// }
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 获取公共common-token
export const common_token = (data) => {
    return http.request({
        url: 'app/get_app_token',
        method: 'POST', 
        data,
		// handle:true
    })
}
// 轮播图
export const banner = (data) => {
    return http.request({
        url: 'app/get_array_cover_img',
        method: 'POST', 
        data,
		// handle:true
    })
}

// 查询单词详情
export const word_lib = (data) => {
    return http.request({
        url: 'app/word_lib',
        method: 'POST', 
        data,
		// handle:true
    })
}
// 查询单词列表
export const word_list = (data) => {
    return http.request({
        url: 'app/word_list',
        method: 'POST', 
        data,
		// handle:true
    })
}

//将用户登录code传递到后台置换用户SessionKey、OpenId等信息
export const wx_code = (data) => {
    return http.request({
        url: '',
        method: 'GET', 
        data,
		// handle:true
    })
}
//向后台更新信息
export const wx_updateUserInfo = (data) => {
    return http.request({
        url: '',
        method: 'POST', 
        data,
		// handle:true
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
    banner,
	common_token,
	word_lib,
	word_list,
	wx_code,
	wx_updateUserInfo
}