<template>
	<view>
		<myInput></myInput>
		<div class="box">
			<view style="width: 130px;">课程</view>
			<view style="width: 130px;">文章</view>
			<view style="width: 130px;">问答</view>
		</div>
		<!-- 商品列表 -->
		<scroll-view scroll-y="true">
			<view>
				<courseView :hotlist="parlist"></courseView>
			</view>
		</scroll-view>
		<img src="https://www.mescroll.com/img/mescroll-totop.png" alt="" class="imgtop" @click="gotos" v-show="flag">
	</view>
</template>

<script>
	import {ref,reactive,toRefs} from 'vue'
	import {allow} from "@/utils/utils/home.js";
	import { onPageScroll,onPullDownRefresh,onReachBottom} from '@dcloudio/uni-app'
	export default {
		setup() {
			const data = reactive({
				parlist:[],
				flag: false,
				pageSize:1,
				page:10,
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
			   allow(data.pageSize,data.page).then((res) => {
			   	data.parlist=res.data.records
			   })
			    // 停止下拉
			    uni.stopPullDownRefresh()
			   })
			   
			   // 触底加载
			   onReachBottom(() => {
			    
				if(data.page.length!=60){
					data.page++
					allow(data.page, data.pageSize).then(res => {
					 data.parlist = [...res.data.records, ...data.parlist]
					})
				}
				else{
					  uni.showToast({
					                        "title":'已全部加载',
					                    })
				}
			   })
			allow().then((res)=>{
				console.log(res);
				data.parlist=res.data.records
			})
			
			return {
				...toRefs(data),
				gotos
			}
		},
		components: {
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
	.box {
		width: 390px;
		height: 40px;
		line-height: 40px;
		display: flex;
		text-align: center;
	}

	.cenbox {
		display: flex;
	}
</style>
