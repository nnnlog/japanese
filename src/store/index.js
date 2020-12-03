import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		hiragana: false,
		katakana: false,

		noun: false,
		adj: false,
		verb: false,
		etc: false,
		selectedChapter: [],

		ac: 0,
		wa: 0,
		re: 0
	},
	mutations: {
		setQuizSetting(state, {hiragana, katakana, noun, adj, verb, etc, selectedChapter}) {
			state.hiragana = hiragana;
			state.katakana = katakana;
			state.noun = noun;
			state.adj = adj;
			state.verb = verb;
			state.etc = etc;
			state.selectedChapter = selectedChapter;
		},
		setQuizStatus(state, {ac, wa, re}) {
			state.ac = ac;
			state.wa = wa;
			state.re = re;
		}
	},
	actions: {
		saveQuizSetting({commit}, {hiragana, katakana, noun, adj, verb, etc, selectedChapter}) {
			commit('setQuizSetting', {
				hiragana: !!hiragana,
				katakana: !!katakana,
				noun: !!noun,
				adj: !!adj,
				verb: !!verb,
				etc: !!etc,
				selectedChapter: Array.isArray(selectedChapter) ? selectedChapter : [],
			});
		},
		setQuizStatus({commit}, {ac, wa, re}) {
			commit('setQuizStatus', {
				ac: ac,
				wa: wa,
				re: re,
			});
		}
	},
	getters: {
		quizSetting(state) {
			return {
				hiragana: state.hiragana,
				katakana: state.katakana,
				noun: state.noun,
				adj: state.adj,
				verb: state.verb,
				etc: state.etc,
				selectedChapter: state.selectedChapter
			}
		},
		quizStatus(state) {
			return {
				ac: state.ac,
				wa: state.wa,
				re: state.re
			};
		}
	},
	modules: {}
});
