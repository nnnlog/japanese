<template>
	<md-content style="display: flex; flex-direction: column; min-height: 100vh;" md-theme="primary">
		<nav class="nav-bar">
			<p class="nav-bar-text" @click="$router.push({name: 'Main'}).catch(()=>{});" style="cursor: pointer;">
				일본어 학습
			</p>
			<div style="margin-right: 20px; font-size: 17px;">
				<div v-if="{'spell': 1, 'word': 1}[$route.fullPath.split('/').filter(s => s !== '').join('/')]" style="display: flex; justify-content: center;">
					<p style="color: green; margin-right: 3px;">{{$store.getters.quizStatus.ac}}</p>
					<p style="margin-right: 3px;">/</p>
					<p style="color: red; margin-right: 3px;">{{$store.getters.quizStatus.wa}}</p>
					<p style="margin-right: 3px;">/</p>
					<p style="color: #c7cc00;">{{$store.getters.quizStatus.re}}</p>
				</div>
				<md-tooltip>맞은 문제 / 틀린 문제 / 남은 문제</md-tooltip>
			</div>
		</nav>
		<router-view style="flex: 1; align-items: center;"></router-view>
	</md-content>
</template>

<script>
import Main from './views/Main.vue';

export default {
	name: 'App',
	components: {
		Main: Main
	}
};
</script>

<style>
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css');

* {
	font-family: "NanumSquareRound", serif;
}

html, head, body {
	margin: 0;
	padding: 0;
}

.nav-bar {
	height: 85px;
	background: rgba(240, 240, 240, 0.9);
	box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.25);
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.nav-bar-text {
	margin: 0 0 0 29px;
	font-size: 28px;
}
</style>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("primary", (
		primary: #FF4081,
		accent: #FF4081
));
@include md-register-theme("reverse", (
		primary: #00bf7e,
		accent: #00bf7e
));

@import "~vue-material/dist/theme/all";
</style>
