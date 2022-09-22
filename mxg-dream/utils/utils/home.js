import http from '@/common/js/request.js'
// 轮播图
async function getBanner() {
	const {
		data
	} = await http.get('article/api/advert/show/1')
	return data
}
// 首页全部分类
async function category() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
// 热门推荐
async function hot(current, size, sort) {
	const {
		data
	} = await http.post('course/api/course/search', {
		current: current,
		size: size,
		sort: sort
	})
	return data
}
// 近期上新
async function news() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: "new",
		isFree: null,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 免费精品
async function free() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: null,
		isFree: 1,
		labelId: null,
		categoryId: null,
		current: 1,
		size: 10
	})
	return data
}
// 付费精品
async function fufeis(current,page) {
	const {data} = await http.post('course/api/course/search',{ current:current, isFree:0 ,size:page})
	return data
}
// 分类接口
async function classification() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
//切换分类
async function tabfens() {
	const {data} = await http.post('article/api/article/search',{categoryId: 1, current: 1, size: 10})
	return data
}
// 阅读头部分类
async function yuedu() {
	const {
		data
	} = await http.get('article/api/category/label/list')
	return data
}
async function allow() {
	const {
		data
	} = await http.post('course/api/course/search', {
		content: null,
		sort: null,
		isFree: null,
		labelId: null,
		categoryId: 6,
		current: 1,
		size: 10
	})
	return data
}
async function yuetui() {
	const {
		data
	} = await http.post('article/api/article/search', {
		current: 1,
		size: 10
	})
	return data
}
// 详情
async function detail() {
	const {
		data
	} = await http.get('course/api/course/null')
	return data
}
	// 章节
async function sections() {
	const {
		data
	} = await http.get('course/api/chapter/section/list/null')
	return data
}
// 评论
async function comment() {
	const {
		data
	} = await http.get('course/api/comment/list/null')
	return data
}
// 套餐
async function setmeal() {
	const {
		data
	} = await http.get('course/api/group/list/null')
	return data
}
// 问答
async function asks() {
	const {data} = await http.post('question/api/question/hot',{current: 1, size: 10})
	return data
}
async function yueduxiang() {
	const {data} = await http.get('article/api/article/12')
	return data
}
async function qingjia() {
	const {data} = await http.get('article/api/comment/list/14')
	return data
}
export {
	getBanner,
	category,
	hot,
	news,
	free,
	fufeis,
	classification,
	tabfens,
	yuedu,
	allow,
	yuetui,
	detail,
	sections,
	comment,
	setmeal,
	asks,
	yueduxiang,
	qingjia
}
