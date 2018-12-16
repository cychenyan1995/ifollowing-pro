const mutations = {
  setTableList (state, payload) {
      state.tableData = payload.tableData,
      state.pageTotal = payload.pageTotal
  }
}

export default mutations;