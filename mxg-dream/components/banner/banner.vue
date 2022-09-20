<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" indicator-color="#ccc"
			:interval="3000" :duration="1000"
			>
			<swiper-item v-for="item,index in tablist" :key="index" :style="`background-image: linear-gradient(${item.background}, #fff);`">
				<view class="swiper-item" >
					<image :src="item.imageUrl" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import {
		getBanner
	} from '@/utils/utils/home.js';
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup(props,context) {
			console.log(props);
			const data = reactive({
				tablist: []
			})
			getBanner().then((res) => {
				console.log(res);
				data.tablist = res.data
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>
<style lang="scss">
	.swiper {
		width: 100%;
		height: 350rpx;
	}
	.swiper-item {
		height: 100%;
		border: none;
	}
	image {
		width: 90%;
		margin-left: 5%;
		height: 297rpx;
		border-radius: 15rpx;
	}
</style>
