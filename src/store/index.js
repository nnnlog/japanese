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
    selectedChapter: []
  },
  mutations: {
    setQuizSetting(state, {hiragana, katakana, noun, adj, verb, selectedChapter}) {
      state.hiragana = hiragana;
      state.katakana = katakana;
      state.noun = noun;
      state.adj = adj;
      state.verb = verb;
      state.selectedChapter = selectedChapter;
    }
  },
  actions: {
    setQuizSetting({commit}, {hiragana, katakana, noun, adj, verb, selectedChapter}) {
      commit('setQuizSetting', {
        hiragana: !!hiragana,
        katakana: !!katakana,
        noun: !!noun,
        adj: !!adj,
        verb: !!verb,
        selectedChapter: Array.isArray(selectedChapter) ? selectedChapter : [],
      })
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
        selectedChapter: state.selectedChapter
      }
    }
  },
  modules: {
  }
});
