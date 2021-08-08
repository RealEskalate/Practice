import Vue from 'vue'
import Vuex from 'vuex'
import adonaPost from '@/store/modules/adonaPost'
Vue.use(Vuex)
export default new Vuex.Store({
  // state: {},
  modules: {
    adonaPost
  }
})
