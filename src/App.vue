<template>
	<div style="display: flex; flex-direction: column; height: 100vh;">
		<nav class="nav-bar">
			<p class="nav-bar-text">
				일본어 학습
			</p>
		</nav>
		<router-view style="flex: 1; align-items: center;"></router-view>
	</div>
</template>

<script>
import Main from './views/Main.vue'

export default {
	name: 'App',
	components: {
		Main: Main
	}
}
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
