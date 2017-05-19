import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import screen from './modules/screen'

const store = new Vuex.Store({
  modules: {
    screen
  },
  state: {
    url: 'https://devreads.top'
  },
  mutations: {
    setUrl (state, url) {
      if (!url.match(/^[a-zA-Z]+:\/\//)) {
        url = 'http://' + url
      }
      state.url = url
    }
  },
  getters: {
    url (state) {
      return state.url
    }
  }
})

export default store
