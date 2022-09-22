<template>
	<view>
		<view class="header">
			<view class="left">
				<view class="left-text">
					{{title}}
				</view>
				 <view class="hot-text">
					HOT
				</view>
			</view>
			<view class="right">
				全部 >
			</view>
		</view>
		<view class="course-item" v-for="item,index in hotlist" :key="index" @click="tiao(item.id)">
			<view class="course-img">
				<image :src="item.mainImage" mode=""></image>
			</view>
			<view class="course-text">
				<view class="first-text">
					{{item.title}}
				</view>
				<view class="teacther-text">
					<image src="../../static/images/mine.png" mode=""></image> {{item.nickName}}
				</view>
				<view class="bottom">
					<view class="left">
						<image src="../../static/images/money.png" mode=""></image> {{item.isFree==1?'免费': item.priceOriginal }}
					</view>
					<view class="right">
						<image src="../../static/images/video.png" mode=""></image> {{item.commTotal}}人在学
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['hotlist','freelist','title'],
		name:"courseView",
	setup() {
		const tiao=(id)=>{
			console.log(id);
			uni.navigateTo({
				url: `/pages/detailView/detailView?id=${id}`
			});
			
		}
		return {
			tiao
		}
	}
	}
</script>

<style lang="scss">
	.header{
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding: 2% 4%;
				box-sizing: border-box;
				.left{
					view{
						float: left;
					}
					.left-text{
						font-size: 40rpx;
						color: #474a49;
					}
					.hot-text{
						font-size: 24rpx;
						text-align: center;
						width: 80rpx;
						height: 40rpx;
						line-height: 40rpx;
						background-image: linear-gradient(to right,#fb6731,#fa1b11);
						color: white;
						border-radius: 20rpx;
						border-bottom-left-radius: 5rpx;
						
					}
				}
				.right{
					color: #7a7a7a;
				}
			}
.course-item{
		width: 100%;
		padding: 2%;
		margin-bottom: 3%;
		height: 240rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1px solid #eee;
		.course-img{
			width: 40%;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
		.course-text{
			image {
				width: 30rpx;
				height: 30rpx;
			}
			flex: 1;
			margin-left: 4%;
			.first-text{
				font-weight: 600;
				
			}
			.teacther-text{
				color: #5e5e5e;
				margin-top: 5%;
			}
			.bottom{
				width: 100%;
				display: flex;
				.left{
					color: orangered;
				} 
				.right{
					margin-left: 16%;
				}
			}
		}
	}
</style>