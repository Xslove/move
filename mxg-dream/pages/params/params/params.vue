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
	</view>
</template>

<script>
	import {ref,reactive,toRefs} from 'vue'
	import {allow} from "@/utils/utils/home.js"
	export default {
		setup() {
			const data = reactive({
				parlist:[],
			})
			allow().then((res)=>{
				console.log(res);
				data.parlist=res.data.records
			})
			
			return {
				...toRefs(data),
			}
		},
		components: {
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
