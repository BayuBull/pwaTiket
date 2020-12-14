import Vue from 'vue'
import Vuex from 'vuex'

import login from '../store/Auth/login'
import register from '../store/Auth/register'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    register
  }
})
