<script setup lang="ts" name="Login">
	import { onMounted, onBeforeUnmount, ref } from "vue"
	import appTopNav from "@/views/layout/components/app-topnav.vue"
	import AppHeader from "@/views/layout/components/app-header.vue"
	import AppFooter from "@/views/layout/components/app-footer.vue"
	import AppHeaderSticky from "@/views/layout/components/app-header-sticky.vue"
	// const y = ref<number>(0);
	// const onScroll = () => {
	// 	y.value = document.documentElement.scrollTop;
	// }
	// onMounted(() => {
	// 	window.addEventListener('scroll', onScroll);
	// })
	// onBeforeUnmount(() => {
	// 	window.removeEventListener('scroll', onScroll)
	// })
</script>

<template>
	<appTopNav></appTopNav>
	<AppHeader></AppHeader>
	<AppHeaderSticky></AppHeaderSticky>
	<main class="app-body">
		<router-view></router-view>
	</main>
	<AppFooter></AppFooter>
</template>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
