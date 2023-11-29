
// 获取博客列表
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

// 获取博客详情
export const getDetail = (id?: string) => {
  return [
    {
      id: 1,
      title: '详情啊啊啊啊啊啊啊啊啊啊啊啊',
      author: '王小虎',
      date: '2020-04-01',
      content: '我是详情接口啦啦啦啦',
      tag: ['vue', 'javascript']
    }
  ]
}

// 新增博客
export const newBlog = (blogData = {}) => {
  // blogData 是一个对象
  return {
    id: 3 // 新增成功后返回的 id
  }
}


// 更新博客
export const updateBlog = (id: string, blogData = {}) => {
  console.log('new Blog Data.........', id);

  return {
    id: 6656566656566 // 更新成功后返回的 id
  }
}


// 删除博客
export const deleteBlog = (id: string) => {
  return false
}
