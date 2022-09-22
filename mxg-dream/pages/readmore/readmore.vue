<template>
	<view >
		
		<div class="box" >
			<p class="bor">
					<span v-for="(item,index) in yuelist" :key="index">{{item.name}}</span>
				</p>
		</div>
		<div class="yyds">
			<h2>{{yuelists.title}}</h2>
			<p>
				<img :src="yuelists.imageUrl" alt="" class="imgs">
				<span>{{yuelists.nickName}}</span>
				<span>{{yuelists.updateDate}}</span>
				<span>{{yuelists.thumhup}}人阅读</span>
			</p>
		</div>
		<div v-html="yuelists.htmlContent"></div>
		<view class="bottom">
			<p class="hot-text">热门评论</p>
		
			<view class="ask-item" v-for="item in articleAsk" :key="item.id">
				<view class="pic-left">
					<image :src="item.userImage" mode="" v-if="item.userImage"></image>
					<image src="../../static/tab/my.png" mode="" v-else></image>
				</view>
				<view class="txt-right">
					<p class="fir-name"><span>{{item.nickName}}</span><span>{{item.createDate}}</span></p>
					<p>{{item.content}}</p>
				</view>
			</view>
		</view>
		<view class="bottom-ipt">
			<input type="text" placeholder="有何高见,展开讲讲......">
			<span>提交</span>
		</view>
	</view>
</template>

<script>
	import {yueduxiang,qingjia} from "@/utils/utils/home.js";
	import {reactive,toRefs} from 'vue'
	export default {
		setup() {
			const data=reactive({
				yuelist:[],
				yuelists:[],
				articleAsk:[]
			})
			yueduxiang().then((res)=>{
				console.log(res);
				data.yuelist=res.data.labelList
				data.yuelists=res.data
			})
			qingjia().then((res)=>{
				console.log(res);
				data.articleAsk=res.data
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style lang="scss">
.bor{
	span{
		border: 1px solid #409bff;
		margin-right: 10rpx;
		font-size: 14rpx;
		border-radius: 10px;
	}
}
.imgs{
	width: 30px;
	height: 30px;
	border-radius: 50%;
}
	.bottom {
		width: 100%;
		padding: 2%;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		.hot-text{
			border-left: 3px solid #345dc2;
			padding-left: 5%;
		}
		.ask-item{
			width: 100%;
			display: flex;
			margin: 4% 0;
			.pic-left{
				width: 14%;
				image{
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}
			}
			.txt-right{
				flex: 1;
				.fir-name{
					width: 100%;
					display: flex;
					justify-content: space-between;
					color: gray;
					font-size: 26rpx
				}
			}
		}
		.hot-text {
			font-weight: 700;
			font-size: 36rpx;
		}
	}

	.bottom-ipt {
		position: sticky;
		bottom: 0;
		left: 0;
		background-color: white;
		padding: 4% 2%;
		box-sizing: border-box;
		display: flex;
		color: gray;

		input {
			width: 80%;
			height: 70rpx;
			border-radius: 36rpx;
			background-color: #f8f9fb;
			padding-left: 4%;
			font-size: 30rpx
		}

		span {
			width: 18%;
			margin-left: 2%;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 10rpx;
			display: inline-block;
			text-align: center;
			background-color: #f8f9fb;
			font-size: 30rpx;
		}
	}
</style>
