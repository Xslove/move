<template>
	<view>
		<view class="article-item" v-for="item,index in yuetuilist" :key="index" @click="tiao(item.id)">
			<view class="left">
				<view class="fir-text">
					{{item.title}}
				</view>
				<view class="sec-text">
					{{item.summary}}
				</view>
				<view class="bottom-text">
					<view class="name">
						{{item.nickName}}
					</view>
					<view class="">
						  {{item.updateDate}} · {{item.viewCount}}赞
					</view>
					
				</view>
			</view>
			<view class="right">
				<image :src="item.imageUrl"></image>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['yuetuilist'],
		name:"articleView",
		setup() {
			const tiao=(id)=>{
				console.log(id);
				uni.navigateTo({
					url: `/pages/readmore/readmore?id=${id}`
				});
				
			}
			return {
				tiao
			}
		}
	}
</script>

<style lang="scss">
.article-item{
			width: 100%;
			display: flex;
			border-bottom: 1px solid #eee;
			padding: 3%;
			box-sizing: border-box;
			.left{
				width: 70%;
				.fir-text{
					font-weight: 700;
					
				}
				.sec-text{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 25rpx;
					color: #7e7e7e;
					margin: 2% 0 4% 0;
				}
				.bottom-text{
					width: 100%;
					display: flex;
					font-size: 25rpx;
					color: #7e7e7e;
					.name{
						color: black;
					}
				}
			}
			.right{
				flex: 1;
				margin-left: 2%;
				image{
					width: 100%;
					height: 80%;
					border-radius: 6%;
					
				}
			}
		}
</style>