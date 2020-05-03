import Vue from 'vue'
import Vuex from 'vuex'
import Profile from '../services/Profile'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('cmsAdmin') || '',
    userInfo: {
      name: 'Zafar Davlatov',
      image: 'https://revdantheman.files.wordpress.com/2015/09/300b.jpg',
      status: 'admin'
    }
  },
  mutations: {
    setToken (state, payload) {
      state.userToken = payload
    },
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    setUsername ({ commit }, payload) {
      Profile.getProfile().then(res => {
        console.log(res)
        commit('setUserInfo', payload)
      }).catch(err => console.log(err))
    }
  },
  modules: {
  }
})
