import http from '@/common/js/request.js'
// 轮播图
async function getBanner(){
	const {data}=await http.get('article/api/advert/show/1')
	return data
}
// 首页全部分类
async function category(){
	const {data}=await http.get('article/api/category/label/list')
	return data
}
// 热门推荐
async function hot(current,size,sort){
	const {data}=await http.post('course/api/course/search',{current:current,size:size,sort:sort})
	return data
}
// 近期上新
async function news(){
	const {data}=await http.post('course/api/course/search',{content: null, sort: "new", isFree: null, labelId: null, categoryId: null, current: 1, size: 10})
	return data
}
// 免费精品
async function free(){
	const {data}=await http.post('course/api/course/search',{content: null, sort: null, isFree: 1, labelId: null, categoryId: null, current: 1, size: 10} )
	return data
}	
// 分类接口
async function classification(){
	const {data}=await http.get('article/api/category/label/list')
	return data
}
export {
	getBanner,
	category,
	hot,
	news,
	free,
	classification
}