<template>
	<view>
		<view class="header">
			<view class="left">
				<view class="left-text">
					免费精选
				</view>
				 <view class="hot-text">
					FREE
				</view>
			</view>
			<view class="right">
				全部 >
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"textView",
		data() {
			return {
				
			};
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
</style>