import getters from './getter/index'
import actions from './action/index'
import mutations from './mutation/index'

let state = {
  totalNum: 0,
  onlineNum: 0
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}