import { queryTableList } from '../../../../api/remindMessage/index'
const actions = {
    fetchTableList({ dispatch }, payload) {
      console.log(payload.param)
      queryTableList(payload.param).then((res) => {
        dispatch('setTableList', { tableData: res.data.tableData, pageTotal: res.data.pageTotal });

      })
    },
    setTableList({ commit }, payload) {
      commit('setTableList', payload);
    }

    // contentList ({ dispatch }, payload) {
    // payload.ref.listLoading = true;
    //  getContentListPage(payload.param).then((res) => {
    //   dispatch('setcontentList', {total: res.data.total, contents: res.data.Contents});
    //   payload.ref.listLoading = false;
    // }); 
    // getMkContentListByPage(payload.param).then((res) => {
    //   dispatch('setcontentList', {total: res.data.pageTotal, contents: res.data.data});
    //   payload.ref.listLoading = false;
    // });
}

export default actions;
