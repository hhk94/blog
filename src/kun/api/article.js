import _axios from '@/kun/plugins/axios'

// import store from '@/store'

export default class Cms {
	/**
	 * 新增文章类别
	 * @param {string} typename 分类名
	 * @method post
	 */
	static async article_type_add(data) {
		const groups =  await _axios({
			method: 'post',
			url: 'cms/article_type_add',
			data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章分类列表
	 * @param null
	 * method get
	 */
	static async article_type_list_get(data) {
		
		const groups =  await _axios({
			method: 'get',
			url: 'cms/article_type_list_get',
			data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章类别删除
	 * @param {int} id
	 * method delete
	 */
	static async article_type_delete(data) {
		
		const groups =  await _axios({
			method: 'delete',
			url: 'cms/article_type_delete',
			params:data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章中图片添加
	 * @param {file} file[]
	 * method post
	 */
	static async article_add_img(data) {
		const groups =  await _axios({
			method: 'post',
			url: 'cms/article_add_img',
			data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章保存
	 * @param {string} article_title 文章名
	 * @param {int} article_type_id	文章类别id
	 * @param {string} article_content	文章内容
	 * @param {int} article_input_id	文章作者id
	 * method post
	 */
	static async article_add(data) {
		const groups =  await _axios({
			method: 'post',
			url: 'cms/article_add',
			data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章分类列表
	 * @param null
	 * method get
	 */
	static async article_list_get(data) {
		const groups =  await _axios({
			method: 'get',
			url: 'cms/article_list_get',
			data,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章删除
	 * @param {int} id
	 * method delete
	 */
	static async article_delete(params) {
		const groups =  await _axios({
			method: 'delete',
			url: 'cms/article_delete',
			params,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章获取
	 * @param {int} id
	 * method get
	 */
	static async article_get(params) {
		const groups =  await _axios({
			method: 'get',
			url: 'cms/article_get',
			params,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章评论获取
	 * @param {int} article_id
	 * method get
	 */
	static async article_comments_get(params) {
		const groups =  await _axios({
			method: 'get',
			url: 'cms/article_comments_get',
			params,
			handleError: true,
		})
		return groups
	}
	/**
	 * 文章评论新增
	 * @param {int} article_id 文章id
	 * @param {int} tid 评论上级id
	 * @param {string} comment_content 评论内容
	 * @param {int} user_id 作者id
	 * method post
	 */
	static async article_comments_add(data) {
		const groups =  await _axios({
			method: 'post',
			url: 'cms/article_comments_add',
			data,
			handleError: true,
		})
		return groups
	}
	
	/**
	 * 文章列表按评论数排序
	 * @param {int} limit 默认10
	 * method get
	 */
	static async article_list_get_by_count(params) {
		const groups =  await _axios({
			method: 'get',
			url: 'cms/article_list_get_by_count',
			params,
			handleError: true,
		})
		return groups
	}
	// static async createOneGroup(name, info, permission_ids) {
	//   const res = await post('cms/admin/group', {
	//     name,
	//     info,
	//     permission_ids,
	//   })
	//   return res
	// }
}