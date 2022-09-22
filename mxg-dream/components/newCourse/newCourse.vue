<template>
		
		<view class="box">
			<view class="course-item" v-for="item,index in newslist" :key="index"  @click="tiao(item.id)">
				<view class="course-img">
					<image :src="item.mainImage"></image>
				</view>
				<view class="first-text">
					{{item.title}}
				</view>
				<view class="teacther-text">
					<image src="../../static/images/mine.png" mode=""></image>  {{item.nickName}}
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
			
	
	
</template>

<script>
	export default {
		props:['newslist','title'],
		name:"newCourse",
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
	.box{
		display: flex;
	}
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
		width: 9.875rem;
		padding: 20rpx;
		height: 310rpx;
		margin-right: 20rpx;
		background-color: #fff;
		box-shadow: 5px 6px 5px #eee;
		border-radius: 30rpx;
		.course-img{
			width: 100%;
			height: 160rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
			.first-text{
				font-weight: 600;
				font-size: 25rpx;
			}
			.teacther-text{
				color: #5e5e5e;
				margin-top: 8%;
				image {
					width: 25rpx;
					height: 25rpx;
				}
			}
			.bottom{
				width: 100%;
				display: flex;
				font-size: 25rpx;
				justify-content: space-between;
				image {
					width: 25rpx;
					height: 25rpx;
				}
			}
		
	}
</style>