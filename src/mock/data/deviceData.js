import Mock from 'mockjs'

const numInfo = Mock.mock({
  totalNum: Mock.Random.integer(200,300),
  onlineNum: Mock.Random.integer(100,200)
})

export { numInfo }