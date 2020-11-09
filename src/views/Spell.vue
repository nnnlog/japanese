<template>
	<div class="card-list">
		<div v-if="quizId >= quizProblem.length">
			<h1>퀴즈 종료</h1>
			<p>맞춘 문제 : {{ ac }}</p>
			<p>틀린 문제 : {{ wa }}</p>
			<p><a style="cursor: pointer;" @click="$router.push({name: 'Main'})">메인으로 돌아가기 <span class="mdi mdi-chevron-right"></span></a></p>
			<p><a style="cursor: pointer;" @click="startQuiz()">다시하기 <span class="mdi mdi-chevron-right"></span></a></p>		</div>
		<div v-else class="card" :class="`card-${cardStatus}`">
			<div class="card-quiz">{{ quizProblem[quizId].text }}</div>
			<div class="card-ans-list">
				<div class="card-ans" v-for="info of ans" @click="solve(info)"
				     :class="info.text === selectedAns ? `card-${cardStatus}` : ''">
					<!--<div
							:style="cardStatus === 'ac' || showAns ? `justify-content: flex-end; align-items: flex-end;` : 'justify-content: center;'">-->
						{{ info.speak }}
					<!--</div>
					<div :style="cardStatus === 'ac' || showAns ? `display: block;` : 'display: none;'">-->
						{{ cardStatus === "ac" || showAns ? `(${info.text})` : '' }}
					<!--</div>-->
				</div>
			</div>
		</div>
		<div>

		</div>

		<md-snackbar md-position="center" :md-duration="Infinity" :md-active.sync="waSnackbar" md-persistent>
			<span>다시 맞춰주세요!</span>
			<md-button class="md-primary" @click="(waSnackbar = false) || (showAns = true)">정답 보기</md-button>
		</md-snackbar>
		<!--<md-snackbar md-position="left" :md-duration="700" :md-active.sync="acSnackbar" md-persistent>
			<span>맞춘 문제 : {{ ac }}, 틀린 문제 : {{ wa }}, 남은 문제 : {{ quizProblem.length - wa - ac }}</span>
		</md-snackbar>-->
	</div>
</template>

<script>
export default {
	name: "Spell",
	created() {
		let quizSetting = this.$store.getters.quizSetting;
		if (!quizSetting.hiragana && !quizSetting.katakana) {
			this.$router.push('/');
			return;
		}

		this.startQuiz();
	},
	data() {
		return {
			cardStatus: '',
			showAns: false,

			acSnackbar: false,
			waSnackbar: false,

			ac: 0, //Accepted
			wa: 0, //Wrong Answer
			alreadyWA: 0,

			quizId: 0,
			ans: [],
			selectedAns: 0,

			quizProblem: [],
			hiragana: [
				{text: "あ", speak: "a"},
				{text: "い", speak: "i"},
				{text: "う", speak: "u"},
				{text: "え", speak: "e"},
				{text: "お", speak: "o"},
				{text: "か", speak: "ka"},
				{text: "き", speak: "ki"},
				{text: "く", speak: "ku"},
				{text: "け", speak: "ke"},
				{text: "こ", speak: "ko"},
				{text: "さ", speak: "sa"},
				{text: "し", speak: "shi"},
				{text: "す", speak: "su"},
				{text: "せ", speak: "se"},
				{text: "そ", speak: "so"},
				{text: "た", speak: "ta"},
				{text: "ち", speak: "chi"},
				{text: "つ", speak: "tsu"},
				{text: "て", speak: "te"},
				{text: "と", speak: "to"},
				{text: "な", speak: "na"},
				{text: "に", speak: "ni"},
				{text: "ぬ", speak: "nu"},
				{text: "ね", speak: "ne"},
				{text: "の", speak: "no"},
				{text: "は", speak: "ha"},
				{text: "ひ", speak: "hi"},
				{text: "ふ", speak: "hu"},
				{text: "へ", speak: "he"},
				{text: "ほ", speak: "ho"},
				{text: "ま", speak: "ma"},
				{text: "み", speak: "mi"},
				{text: "む", speak: "mu"},
				{text: "め", speak: "me"},
				{text: "も", speak: "mo"},
				{text: "や", speak: "ya"},
				{text: "ゆ", speak: "yu"},
				{text: "よ", speak: "yo"},
				{text: "ら", speak: "ra"},
				{text: "り", speak: "ri"},
				{text: "る", speak: "ru"},
				{text: "れ", speak: "re"},
				{text: "ろ", speak: "ro"},
				{text: "わ", speak: "wa"},
				{text: "を", speak: "wo"},
				{text: "ん", speak: "n"}
			],
			katakana: [
				{text: "ア", speak: "a"},
				{text: "イ", speak: "i"},
				{text: "ウ", speak: "u"},
				{text: "エ", speak: "e"},
				{text: "オ", speak: "o"},
				{text: "カ", speak: "ka"},
				{text: "キ", speak: "ki"},
				{text: "ク", speak: "ku"},
				{text: "ケ", speak: "ke"},
				{text: "コ", speak: "ko"},
				{text: "サ", speak: "sa"},
				{text: "シ", speak: "shi"},
				{text: "ス", speak: "su"},
				{text: "セ", speak: "se"},
				{text: "ソ", speak: "so"},
				{text: "タ", speak: "ta"},
				{text: "チ", speak: "chi"},
				{text: "ツ", speak: "tsu"},
				{text: "テ", speak: "te"},
				{text: "ト", speak: "to"},
				{text: "ナ", speak: "na"},
				{text: "ニ", speak: "ni"},
				{text: "ヌ", speak: "nu"},
				{text: "ネ", speak: "ne"},
				{text: "ノ", speak: "no"},
				{text: "ハ", speak: "ha"},
				{text: "ヒ", speak: "hi"},
				{text: "フ", speak: "hu"},
				{text: "ヘ", speak: "he"},
				{text: "ホ", speak: "ho"},
				{text: "マ", speak: "ma"},
				{text: "ミ", speak: "mi"},
				{text: "ム", speak: "mu"},
				{text: "メ", speak: "me"},
				{text: "モ", speak: "mo"},
				{text: "ヤ", speak: "ya"},
				{text: "ユ", speak: "yu"},
				{text: "ヨ", speak: "yo"},
				{text: "ラ", speak: "ra"},
				{text: "リ", speak: "ri"},
				{text: "ル", speak: "ru"},
				{text: "レ", speak: "re"},
				{text: "ロ", speak: "ro"},
				{text: "ワ", speak: "wa"},
				{text: "ヲ", speak: "wo"},
				{text: "ン", speak: "n"}
			]
		};
	},
	methods: {
		startQuiz() {
			this.ac = 0;
			this.wa = 0;

			this.quizId = -1;

			this.ans = [];

			let quizSetting = this.$store.getters.quizSetting;
			let problem = [];
			if (quizSetting.hiragana) for (let text of this.hiragana) problem.push(text);
			if (quizSetting.katakana) for (let text of this.katakana) problem.push(text);
			this.quizProblem = this.shuffle(problem);

			this.nextCard();
		},
		nextCard() {
			this.cardStatus = '';
			this.showAns = false;
			this.waSnackbar = false;
			this.acSnackbar = false;
			this.alreadyWA = false;
			this.selectedAns = 0;

			++this.quizId;
			let obj = {};
			obj[this.quizId] = 1;
			let comb = this.combination(0, this.quizProblem.length - 1, obj, 5);

			comb = this.shuffle(comb);
			this.ans = comb.map(i => this.quizProblem[i]);

			this.$store.dispatch('setQuizStatus', {
				ac: this.ac,
				wa: this.wa,
				re: this.quizProblem.length - this.quizId
			});
		},
		solve(ans) {
			if (this.cardStatus === 'ac') return;

			this.selectedAns = ans.text;

			if (ans.text === this.quizProblem[this.quizId].text) {
				if (!this.alreadyWA) ++this.ac;
				this.cardStatus = 'ac';
				this.waSnackbar = false;
				this.acSnackbar = true;

				setTimeout(() => this.nextCard(), 1700);
			} else {
				if (!this.alreadyWA) ++this.wa;
				this.cardStatus = 'wa';
				this.waSnackbar = true;
				this.alreadyWA = true;
			}

			this.$store.dispatch('setQuizStatus', {
				ac: this.ac,
				wa: this.wa,
				re: this.quizProblem.length - this.quizId
			});
		},
		combination(start, end, select, cnt) {
			cnt = Math.min(end - start + 1, cnt);
			cnt -= Object.values(select).length;

			if (cnt * 3 > end - start + 1) {
				let arr = [];
				for (let i = start; i <= end; i++) arr.push(i);
				arr = this.shuffle(arr);
				for (let i = 0; cnt > 0; i++)
					if (!select[arr[i]]) {
						select[arr[i]] = 1;
						--cnt;
					}
			} else {
				while (cnt > 0) {
					let rand = this.mt_rand(start, end);
					if (!select[rand]) {
						--cnt;
						select[rand] = 1;
					}
				}
			}

			return Object.keys(select);
		},
		mt_rand(min, max) {
			let argc = arguments.length;
			if (argc === 0) {
				min = 0;
				max = 2147483647;
			} else if (argc === 1) {
				throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
			} else {
				min = parseInt(min, 10);
				max = parseInt(max, 10);
			}
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		shuffle(array) {
			let currentIndex = array.length, temporaryValue, randomIndex;

			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		}
	}
}
</script>

<style scoped>
.card-list {
	display: flex;
	justify-content: center;
	align-items: center;
}

.card {
	width: 60%;
	min-width: 300px;
	min-height: 450px;

	background: #F0F0F0;
	opacity: 0.7;

	box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	overflow: hidden;

	display: flex;
	flex-direction: row;
}

.card * {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
}

.card-quiz {
	font-size: 80px;
	border-right: 1px solid black;
}

.card-ans-list {
	flex-direction: column;
}

.card-ans {
	border-bottom: 1px solid black;
	font-size: 25px;
	width: 100%;
	flex: 1;

	background: #F0F0F0;

	cursor: pointer;

	justify-content: center;
}

.card-ans-list > .card-ans:nth-last-child(1) {
	border: 0;
}

.card-ac {
	background: #00C853;
}

.card-wa {
	background: #FF4081;
}

@media (max-width: 800px) {
	.card-list {
		flex-direction: column;
		justify-content: center;
	}

	.card {
		width: 80%;
		margin-top: 30px;
		flex-direction: column;
		min-height: 370px;
	}

	.card-quiz {
		border: 0;
		border-bottom: 1px solid black;
	}

	.card-ans-list {
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
	}

	.card-ans {
		border: 0;
		border-right: 1px solid black;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

}

</style>