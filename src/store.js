import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: [],
    filters: {
      search: new RegExp(),
      hidden: false
    }
  },
  mutations: {
    backPath (state, index) {
      state.path = state.path.slice(0, index)
    },
    addDirectory (state, directory) {
      state.path.push(directory)
    },
    updateSearch (state, search) {
      state.filters.search = search
    },
    changeHidden (state) {
      state.filters.hidden = !state.filters.hidden
    }
  }
})
