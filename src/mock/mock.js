import { tableList } from '../mock/data/tableList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const _tableList = tableList;

export default {
  bootstrap () {
    let mock = new MockAdapter(axios);
    console.log('mock:'+mock)
    mock.onGet('/remindMessage/getTableList').reply(config => {
      let tableList = _Contents;
      console.log(tableList);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200,{
            tableData: tableList
          }])

        },1000);
      }) 
    })

    //     mock.onGet('/content/list').reply(config => {
    //   // 搜索词：主键context
    //   let {context} = config.params;
    //   let mockContents = _Contents.filter(Contents => {
    //     if (context && Contents.context.indexOf(context) === -1) return false;
    //     return true;
    //   });
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200, {
    //         Contents: mockContents
    //       }]);
    //     }, 1000);
    //   });
    // });
  }
}
