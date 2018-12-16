import Mock from 'mockjs'

const tableList = [];

for(let i = 0; i < 87; i++) {
  tableList.push(Mock.mock({
    tel: /^1[385][1-9]\d{8}/,
    deviceNo:Mock.Random.string(15),
    date:Mock.Random.date(),
    remindType:Mock.Random.ctitle(4),
    remindContent:Mock.Random.cparagraph(),
    status:/^[01]/
  }))
}

export { tableList }