import { queryOnlineNum } from '../../../../api/deviceManage/index'
const actions = {
  fetchOnlineNum ({ dispatch }, payload) {
    queryOnlineNum(payload.params).then((res) => {
      dispatch('setOnlineNum', {totalNum: res.data.totalNum, onlineNum: res.data.onlineNum})
    })
  },
  setOnlineNum({ commit }, payload){
    commit('setOnlineNum',payload)
  }
}

export default actions
