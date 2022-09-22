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
					<view class="cate-item" v-for="item,index in toplist" :key="index" @click="tiao">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			
		</view>
		
		<!-- 内容 -->
		<view class="article-box">
			<articleView :yuetuilist="yuetuilist"></articleView>
			
		</view>
		<img src="https://www.mescroll.com/img/mescroll-totop.png" alt="" class="imgtop" @click="gotos" v-show="flag">
	</view>
</template>

<script>
	import {ref,reactive,toRefs} from 'vue';
	import {yuedu,yuetui,tabfens} from "@/utils/utils/home.js";
	import { onPageScroll,onPullDownRefresh,onReachBottom} from '@dcloudio/uni-app'
	export default {
	setup() {
		const data=reactive({
			toplist:[],
			yuetuilist:[],
			flag: false,
			pageSize:1,
			page:10,
		})
		const gotos = () => {
			uni.pageScrollTo({
				scrollTop: 0	
			})
		}
		const tiao=()=>{
			tabfens().then((res)=>{
				console.log(res);
				data.yuetuilist=res.data.records
			})
		}
		yuedu().then((res)=>{
			console.log(res);
			data.toplist=res.data
		})
		yuetui().then((res)=>{
			console.log(res);
			data.yuetuilist=res.data.records
		})
		onPageScroll((e) => {
			if(e.scrollTop >= 1350) {
				data.flag = true
			} else {
				data.flag = false
			}
		})
		// 上拉刷新
		   onPullDownRefresh(() => {
		    data.page = 1
		   yuetui(data.pageSize,data.page).then((res) => {
		   	data.yuetuilist=res.data.records
		   })
		    // 停止下拉
		    uni.stopPullDownRefresh()
		   })
		   
		   // 触底加载
		   onReachBottom(() => {
		    
			if(data.page.length!=60){
				data.page++
				yuetui(data.page, data.pageSize).then(res => {
				 data.yuetuilist = [...res.data.records, ...data.yuetuilist]
				})
			}
			else{
				  uni.showToast({
				                        "title":'已全部加载',
				                    })
			}
		   })
		return {
			...toRefs(data),
			tiao,
			gotos
		}
	}
	}
</script>

<style lang="scss">
	.imgtop {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		position: fixed;
		bottom: 200rpx;
		right: 50rpx;
	
	}
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
		width: 90rpx;
		height: 70rpx;
		line-height: 70rpx;
	}
	.cate-item:hover{
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}
}
.active{
	
}
</style>
