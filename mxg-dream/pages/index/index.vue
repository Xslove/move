<template>
	<img src="https://www.mescroll.com/img/mescroll-totop.png" alt="" class="imgtop" @click="gotos">
	<view class="content">
		<search class="search"></search>

		<!-- 轮播图 -->
		<banner props="tablist"></banner>
		<!-- 分类搜索 -->
		<view class="cate-box">
			<view v-for="item,index in categorylist.splice(0,7)" :key="index" @click="jump">{{item.name}}</view>
			<view @tap="jump">全部分类</view>
		</view>
		<view class="list-container">
			<!-- 热门推荐 -->
			<textView style="margin-bottom:20rpx;"></textView>
			<!-- 商品列表 -->
			<scroll-view scroll-y="true" :show-scrollbar="false">
				<view><courseView :hotlist="hotlist"></courseView></view>
				
			</scroll-view>
			<!-- 近期上新 -->
			<textView></textView>
			<!-- 商品列表 -->
			<scroll-view scroll-x="true" :show-scrollbar="false">
				<view class="content-box">
					<newCourse :newslist="newslist"></newCourse>
				</view>
			</scroll-view>

			<!-- 免费精选 -->
			<textView></textView>
			<!-- 商品列表 -->
			<courseView :hotlist="hotlist"></courseView>
			<courseView></courseView>
		</view>
	</view>
</template>

<script>
	import {getBanner,hot,category,news,free} from '@/utils/utils/home.js';
	import {ref,reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data = reactive({
				categorylist: [],//首页分类
				hotlist:[],
				newslist:[],
				freelist:[]
			})
			hot(1,10,hot).then((res)=>{
				console.log(res);
				data.hotlist=res.data.records
			})
			news().then((res)=>{
				console.log(res);
				data.newslist=res.data.records
			})
			free().then((res)=>{
				console.log(res);
				data.freelist=res.data.records
			})
			const jump = () => {
				uni.navigateTo({
					url:'../params/params/params'
				});

			}
			const gotos=()=>{
				console.log(5555);
			}
			category().then((res) => {
				data.categorylist = res.data
			})

			return {
				...toRefs(data),
				jump,
				gotos
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imgtop{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		position: fixed;
		bottom: 200rpx;
		right: 50rpx;
		
	}
	// 分类区域
	.list-container {
		.scroll-view {
			white-space: nowrap;
		}

		.content-box {
			display: flex;
			width: 230vh;
		}
	}

	.header {
		margin-top: 20rpx;
	}

	.cate-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		box-sizing: border-box;

		view {
			width: 23%;
			margin: 1%;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 12rpx;
			text-align: center;
			font-size: 26rpx;
			background-color: #f8f9fb;
		}
	}

	.content {
		width: 100%;
		position: relative;
	}

	.search {
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
