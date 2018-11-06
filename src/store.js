import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    path: [],
    token: '',
    filters: {
      search: new RegExp(),
      hidden: false
    }
  },
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('iarlStore')) {
        const iarlStore = JSON.parse(localStorage.getItem('iarlStore'))
        state.token = iarlStore.token
      }
    },
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
    },
    updateToken (state, token) {
      state.token = token
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('iarlStore', JSON.stringify({
    token: state.token
  }))
})

export default store
