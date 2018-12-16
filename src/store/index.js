import Vue from 'vue'
import Vuex from 'vuex'
import remindMessage from '../modules/remindMessage/store'

Vue.use(Vuex)
const debug = false
export default new Vuex.Store({
  modules: {
    remindMessage
  },
  strict: debug
})