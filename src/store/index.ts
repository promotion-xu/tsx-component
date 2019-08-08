import Vue from 'vue'
import Vuex from 'vuex'

import logins from './modules/login';


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    logins
  }
})

export default store;
