<template>
	<view>
		<myInput></myInput>
		<div class="box">
			<view style="width: 130px;">课程</view>
			<view style="width: 130px;">文章</view>
			<view style="width: 130px;">问答</view>
		</div>
		<div class="cenbox">
			<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			<uni-data-select v-model="value" :localdata="range1" @change="change"></uni-data-select>
			<uni-data-select v-model="value" :localdata="range2" @change="change"></uni-data-select>
		</div>
	</view>
</template>

<script>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import uniBadge from "@/components/uni-data-select/uni-data-select.vue"
	export default {
		setup() {
			const data = reactive({
				value: 0,
				range: [{
						value: 0,
						text: "综合排序"
					},
					{
						value: 1,
						text: "最新排序"
					},
					{
						value: 2,
						text: "热门排序"
					},
				],
				range1: [{
						value: 0,
						text: "全部课程"
					},
					{
						value: 1,
						text: "付费课程"
					},
					{
						value: 2,
						text: "免费课程"
					},
				],
				range2: [{
						value: 0,
						text: "综合排序"
					},
					{
						value: 1,
						text: "最新排序"
					},
					{
						value: 2,
						text: "热门排序"
					},
				],
			})
			const change = (e) => {
				console.log(e);
			}
			return {
				...toRefs(data),
				change
			}
		},
		components: {
			uniBadge
		}
	}
</script>

<style lang="scss">
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
