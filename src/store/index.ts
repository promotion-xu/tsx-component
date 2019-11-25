import Vue from 'vue'
import Vuex from 'vuex'

import logins from './modules/login';
import home from './modules/home';


Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    logins,
    home
  }
})

export default store;
