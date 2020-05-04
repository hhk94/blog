import _axios from '@/kun/plugins/axios'

// import store from '@/store'

export default class Banner {
	
	/**
	  * 方法说明 - banner列表
	  * @url /api/v2/cms/banner_list_get
	  * @param {string} banner_type_id banner类别
	  * @method get
	  */
	static async banner_list_get(params) {
		const groups =  await _axios({
			method: 'get',
			url: 'cms/banner_list_get',
			params,
			handleError: true,
		})
		return groups
	}
	
	
}