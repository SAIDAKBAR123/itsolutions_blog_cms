import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: 'Zafar Davlatov',
      image: 'https://revdantheman.files.wordpress.com/2015/09/300b.jpg',
      status: 'admin'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
