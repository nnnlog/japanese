<template>
	<div class="card-list">
		<div class="card">
			<div class="card-title">글자</div>
			<div class="card-problem-list">
				<md-checkbox v-model="hiragana" class="md-theme-accent" style="color: white;">히라가나 (ひらがな)</md-checkbox>
				<md-checkbox v-model="katakana" class="md-theme-accent" style="color: white;">가타카나 (カタカナ)</md-checkbox>
			</div>
			<div class="card-test">
				<md-button class="md-dense md-theme-primary" @click="startQuizSpell();">
					<span>테스트 시작</span>
					<span class="mdi mdi-chevron-right"></span>
				</md-button>
			</div>
		</div>
		<div class="card">
			<div class="card-title">단어</div>
			<div class="card-problem-list">
				<md-checkbox v-model="noun" class="md-theme-accent" style="color: white;">명사</md-checkbox>
				<md-checkbox v-model="adj" class="md-theme-accent" style="color: white;">형용사</md-checkbox>
				<md-checkbox v-model="verb" class="md-theme-accent" style="color: white;">동사</md-checkbox>
				<md-checkbox v-model="etc" class="md-theme-accent" style="color: white;">기타</md-checkbox>
				<md-field>
					<label for="chapter">학습할 범위 (단원)</label>
					<md-select v-model="selectedChapter" name="chapter" id="chapter" multiple>
						<md-option value="7">7과</md-option>
						<md-option value="8">8과</md-option>
						<md-option value="etc">기타</md-option>
						<md-option value="all">전체</md-option>
					</md-select>
				</md-field>
			</div>
			<div class="card-test">
				<md-button class="md-dense md-theme-primary" @click="startQuizWord();">
					<span>테스트 시작</span>
					<span class="mdi mdi-chevron-right"></span>
				</md-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Main',
	data() {
		return {
			hiragana: false,
			katakana: false,

			noun: false,
			adj: false,
			verb: false,
			etc: false,
			selectedChapter: []
		};
	},
	methods: {
		startQuizSpell() {
			this.$store.dispatch('saveQuizSetting', {
				hiragana: this.hiragana,
				katakana: this.katakana,
				noun: this.noun,
				adj: this.adj,
				verb: this.verb,
				selectedChapter: this.selectedChapter
			});
			let quizSetting = this.$store.getters.quizSetting;
			if (!quizSetting.hiragana && !quizSetting.katakana) {
				alert("히라가나 또는 가타카나를 선택해주세요.");
				return;
			}
			this.$router.push({name: 'Spell'});
		},
		startQuizWord() {
			this.$store.dispatch('saveQuizSetting', {
				hiragana: this.hiragana,
				katakana: this.katakana,
				noun: this.noun,
				adj: this.adj,
				verb: this.verb,
				etc: this.etc,
				selectedChapter: this.selectedChapter
			});
			let quizSetting = this.$store.getters.quizSetting;
			if ((!quizSetting.noun && !quizSetting.verb && !quizSetting.adj && !quizSetting.etc) || !quizSetting.selectedChapter.length) {
				alert("퀴즈 범위를 선택해주세요.");
				return;
			}
			this.$router.push({name: 'Word'});
		}
	},
	computed: {}
}
</script>

<style scoped>
.card-list {
	display: flex;
	width: 80%;
	margin: 0 auto;
	justify-content: space-between;
}

.card {
	width: 45%;
	min-height: 450px;

	background: #FF4081;
	opacity: 0.7;

	box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.25);
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 40px;
}

.card-title {
	font-style: normal;
	font-weight: 800;
	font-size: 36px;
	color: #FFFFFF;

	text-align: left;
}

.card-problem-list {
	flex: 1;

	display: flex;
	justify-content: center;
	flex-direction: column;

	margin: 0 30px;

	font-size: 20px;
}

.card-test {
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}

.card-test * {
	color: white;
	font-size: 18px;
	font-weight: bold;
}

.md-field > label {
	color: white !important;
}

@media (max-width: 1000px) {
	.card-list {
		flex-direction: column;
		justify-content: center;
	}

	.card {
		width: 100%;
		margin-top: 30px;
	}
}
</style>
