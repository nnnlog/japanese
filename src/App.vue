<template>
	<md-content style="display: flex; flex-direction: column; min-height: 100vh;" md-theme="primary">
		<nav class="nav-bar">
			<p class="nav-bar-text" @click="$router.push({name: 'Main'}).catch(()=>{});" style="cursor: pointer;">
				일본어 학습
			</p>
			<div style="margin-right: 20px; font-size: 17px;">
				<div v-if="{'spell': 1, 'word': 1}[$route.fullPath.split('/').filter(s => s !== '').join('/')]"
				     style="display: flex; justify-content: center;">
					<p style="color: green; margin-right: 3px;">{{ $store.getters.quizStatus.ac }}</p>
					<p style="margin-right: 3px;">/</p>
					<p style="color: red; margin-right: 3px;">{{ $store.getters.quizStatus.wa }}</p>
					<p style="margin-right: 3px;">/</p>
					<p style="color: #c7cc00;">{{ $store.getters.quizStatus.re }}</p>
				</div>
				<md-tooltip>맞은 문제 / 틀린 문제 / 남은 문제</md-tooltip>
			</div>
		</nav>
		<router-view style="flex: 1; align-items: center;"></router-view>

		<md-button style="position: fixed; bottom: 20px; left: 20px; font-size: 25px; min-width: 1%;"
		           @click="showInfoDialog = true">
			<span class="mdi mdi-information-outline"></span>
			<md-tooltip>정보</md-tooltip>
		</md-button>

		<md-dialog :md-active.sync="showInfoDialog" style="font-size: 17px;">
			<md-dialog-title>Information / 정보</md-dialog-title>
			<md-tabs md-dynamic-height>
				<md-tab md-label="CREATOR">
					<b>단어와 아이디어를 제공해주신 일본어 선생님께 감사드립니다.</b>
					<div>Created by <span><a href="https://github.com/nnnlog/" target="_blank">박찬솔</a><md-tooltip>nlog</md-tooltip></span>.
					</div>
				</md-tab>

				<md-tab md-label="CONTRIBUTE">
					<p>이 프로젝트는 오픈소스로 진행하고 있습니다!</p>
					<p>단어 추가나 오류 수정, 제보와 같은 기여는 <a href="https://github.com/nnnlog/japanese" target="_blank">이 레포지토리
						<md-tooltip>nnnlog/japanese</md-tooltip>
					</a>로 부탁드립니다.
					</p>
				</md-tab>

				<md-tab md-label="HOSTING">
					<p><a href="https://github.com/nnnlog/jp.nlog.dev" target="_blank">이 레포지토리
						<md-tooltip>nnnlog/jp.nlog.dev</md-tooltip>
					</a>에서 Github Pages를 사용하여 웹페이지를 배포하고 있습니다.
					</p>
				</md-tab>
			</md-tabs>

			<md-dialog-actions>
				<md-button class="md-primary" @click="showInfoDialog = false">Close</md-button>
			</md-dialog-actions>
		</md-dialog>
	</md-content>
</template>

<script>
import Main from './views/Main.vue';

export default {
	name: 'App',
	components: {
		Main: Main
	},
	data() {
		return {
			showInfoDialog: false
		};
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
@include md-register-theme("accent", (
		primary: #f50057,
		accent: #f50057
));

@import "~vue-material/dist/theme/all";
</style>
