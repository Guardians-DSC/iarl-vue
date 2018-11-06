import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    path: [],
    token: '',
    activeWorkspace: {
      lab: 'LCC3',
      apiURL: 'http://127.0.0.1:3002'
    },
    filters: {
      search: new RegExp(),
      hidden: false
    }
  },
  mutations: {
    initialiseStore (state) {
      if (localStorage.getItem('iarlStorage')) {
        const iarlStorage = JSON.parse(localStorage.getItem('iarlStorage'))
        state.token = iarlStorage.token
        state.path = iarlStorage.path
        if (iarlStorage.activeWorkspace) {
          state.activeWorkspace = iarlStorage.activeWorkspace
        }
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
    },
    updateWorkspace (state, workspace) {
      state.activeWorkspace = workspace
      state.path = []
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('iarlStorage', JSON.stringify({
    token: state.token,
    activeWorkspace: state.activeWorkspace,
    path: state.path
  }))
})

export default store
