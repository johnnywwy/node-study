export const getList = (author?: string, keyword?: string) => {
  return [
    {
      id: 1,
      title: 'Vue 3.0 发布了',
      author: '王小虎',
      date: '2020-04-01',
      content: 'Vue 3.0 发布了',
      tag: ['vue', 'javascript']
    }
  ]
}

export const getDetail = (id?: string) => {
  return [
    {
      id: 1,
      title: 'Vue 3.0 发布了',
      author: '王小虎',
      date: '2020-04-01',
      content: '我是详情接口啦啦啦啦',
      tag: ['vue', 'javascript']
    }
  ]
}