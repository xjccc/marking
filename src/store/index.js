import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    showAther: null
  },
  mutations: {
    SetAther (state, b) {
      state.showAther = b
    }
  },
  actions: {
    SetAther (context, b) {
      context.commit('SetAther', b)
    }
  }
})

export default store
