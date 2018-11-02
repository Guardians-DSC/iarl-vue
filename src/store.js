import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: []
  },
  mutations: {
    backPath (state, index) {
      state.path = state.path.slice(0, index)
    }
  }
})
