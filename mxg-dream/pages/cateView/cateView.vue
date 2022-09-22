<template>
	<view>
		<view class="cate-box">
			<scroll-view scroll-y="true" class="left" :show-scrollbar="false">
				<view>
					<view class="left-item" v-for="item,index in leftlist" :key="index" @click="changeId(item,item.id)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>


			<view class="right">
				<view class="right-box">
					<view class="right-item" v-for="item,index in cateRight" :key="index" @click="tiao(item.id)">
						{{item.name}}
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue';
	import {
		classification
	} from "@/utils/utils/home.js"
	export default {
		setup() {
			
			const data = reactive({
				leftlist: [],
				cateRight:[],
				currentId: 1
			})
			const tiao=(id)=>{
				uni.navigateTo({
					url:'/pages/params/params/params'
				})
			}
			const changeId=(item,id)=>{
				data.cateRight=item.labelList
				data.currentId=id
				
			}
			classification().then((res) => {
				console.log(res);
				data.leftlist=res.data
				data.cateRight=res.data[data.currentId-1].labelList
			})
			return {
				...toRefs(data),
				changeId,
				tiao
			}
		}
	}
</script>

<style lang="scss">
	.active {
		color: #345dc2 !important;
	}

	.active::before {
		content: "";
		position: absolute;
		width: 6rpx;
		height: 50rpx;
		background-color: #345dc2;
		left: 0;
		top: 35%;
	}

	.cate-box {
		width: 100%;
		display: flex;

		.left {
			width: 30%;
			text-align: center;
			height: calc(100vh - 100rpx);
			background-color: #f8f9fb;

			.left-item {
				height: 140rpx;
				line-height: 140rpx;
				font-size: 30rpx;
				font-weight: 400;
				position: relative;
				color: #8c8c8c;
			}

			.left-item:hover {
				border-left: 2px solid #345dc2;
			}
		}
	
	.right {
			flex: 1;

			.right-box {
				width: 100%;
				padding: 5%;

				.right-item {
					display: inline-block;
					height: 64rpx;
					line-height: 64rpx;
					padding: 0 2%;
					border-radius: 30rpx;
					border: 1px solid #bbb;
					margin: 2%;
					color: #33352d;
				}
			}
		}
	}
</style>
