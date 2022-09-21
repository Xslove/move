<template>
	<view>
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="cate-box">
					<view class="cate-item active">
						推荐
					</view>
					<view class="cate-item" v-for="item,index in toplist" :key="index">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			
		</view>
		
		<!-- 内容 -->
		<view class="article-box">
			<articleView :yuetuilist="yuetuilist"></articleView>
			
		</view>
	</view>
</template>

<script>
	import {ref,reactive,toRefs} from 'vue'
	import {yuedu,yuetui} from "@/utils/utils/home.js"
	export default {
	setup() {
		const data=reactive({
			toplist:[],
			yuetuilist:[]
		})
		yuedu().then((res)=>{
			console.log(res);
			data.toplist=res.data
		})
		yuetui().then((res)=>{
			console.log(res);
			data.yuetuilist=res.data.records
		})
		return {
			...toRefs(data)
		}
	}
	}
</script>

<style lang="scss">
	.box{
		position: sticky;
		left: 0;
		top: 0;
		z-index: 22;
	}
	.article-box{
		width: 100%;
		
	}
.cate-box{
	width: 100%;
	height: 80rpx;
	border-bottom: 1px solid #e7e7e7;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fff;
	border: none;
	.cate-item{
		width: 80rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
}
.active{
	border-bottom: 6rpx solid #077dff;
	color: #077dff;
}
</style>
