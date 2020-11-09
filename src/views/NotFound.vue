<template>
	<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
		<h1>요청한 페이지를 찾을 수 없어요.</h1><br>
		<a @click="$router.push({name: 'Main'});" style="cursor: pointer;">메인으로 돌아가기<span class="mdi mdi-chevron-right"></span></a>
	</div>
</template>

<script>
export default {
	name: 'NotFound'
}
</script>

<style scoped>
</style>
