import { createStore } from 'vuex'

export default createStore({
  user: {},
  state () {
    return {
      user: {}
    }
  },
  mutations: {
    user (state, data) {
      state.user = data
     }
  },
  actions: {
  },
  modules: {
  }
})
