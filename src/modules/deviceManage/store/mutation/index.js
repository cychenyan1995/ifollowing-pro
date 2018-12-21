const mutations = {
  setOnlineNum (state, payload) {
    state.totalNum = payload.totalNum
    state.onlineNum = payload.onlineNum
  }
}

export default mutations
