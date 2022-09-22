<template>
	<view>
		<view class="box">
			<!-- 搜索 -->
			<search></search>
			<!-- 分类 -->
			<view class="cate-box">
				<view class="cate-item" v-for="item,index in cate" :key="index" @click="tabcate"> 
					{{item}}
				</view>
			
			</view>
		</view>
		
		<!-- 内容 -->
		<view class="ask-box" v-for="item,index in asklist" :key="index" @click="tiao">
			<view class="ask-item">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					<view class="left">
						{{item.reply}}回答 · {{item.viewCount}}浏览
					</view>
					<view class="right">
						{{item.nickName}} · 2005年05月21日
					</view>
				</view>
			</view>

			
		</view>
		<img src="https://www.mescroll.com/img/mescroll-totop.png" alt="" class="imgtop" @click="gotos" v-show="flag">
	</view>
</template>

<script>
	import {asks} from '@/utils/utils/home.js';
	import {ref,reactive,toRefs} from 'vue';
		import { onPageScroll,onPullDownRefresh,onReachBottom} from '@dcloudio/uni-app'
	export default {
		setup() {
		
			const data=reactive({
				cate:['热门回答','最新问题','等待回答'],
				asklist:[],
					flag: false,
					pageSize:1,
					page:10,
			})
			const tiao=()=>{
				uni.navigateTo({
					url:'/pages/readmore/readmore'
				})
			}
			const tabcate=()=>{
				asks().then((res)=>{
					data.asklist=res.data.records
				})
			}
			asks().then((res)=>{
				data.asklist=res.data.records
			})
			const gotos = () => {
				uni.pageScrollTo({
					scrollTop: 0	
				})
			}
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
			   fufeis(data.pageSize,data.page).then((res) => {
			   	data.fufeuslist=res.data.records
			   })
			    // 停止下拉
			    uni.stopPullDownRefresh()
			   })
			   
			   // 触底加载
			   onReachBottom(() => {
			    
				if(data.page.length!=60){
					data.page++
					asks(data.page, data.pageSize).then(res => {
					 data.asklist = [...res.data.records, ...data.asklist]
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
				gotos,
				tabcate,
				tiao
			}
		}
	}
</script>

<style lang="scss">
	.cate-item:hover{
		border-bottom: 6rpx solid #077dff;
		color: #077dff;
	}
	.imgtop {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		position: fixed;
		bottom: 200rpx;
		right: 50rpx;
	
	}
	.ask-box{
		width: 100%;
		.ask-item{
			width: 100%;
			border-bottom: 1px solid #eee;
			padding: 4%;
			box-sizing: border-box;
			.fir-text{
				font-weight: 700;
				font-size: 35rpx;
			}
			.sec-text{
				display: flex;
				justify-content: space-between;
				margin: 2% 0;
				color: gray;
			}
		}
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
		height: 70rpx;
		line-height: 70rpx;
	}
}
.active{
	border-bottom: 6rpx solid #077dff;
	color: #077dff;
}
</style>
