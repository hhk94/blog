import _axios from '@/kun/plugins/axios'

// import store from '@/store'

export default class Admin {
	/**
	 * 新增文章类别
	 * @param {string} typename 分类名
	 * @method post
	 */
	static async user_login(data) {
		const groups =  await _axios({
			method: 'post',
			url: 'cms/user_login',
			data,
			handleError: true,
		})
		return groups
	}
	
}