<template>
	<view>
		<view class="course-item" v-for="item,index in hotlist" :key="index">
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
		props:['hotlist','freelist'],
		name:"courseView",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
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