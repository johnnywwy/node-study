const blogGetMapList = [
  { url: '/api/blog/list', msg: '博客列表接口' },
  { url: '/api/blog/detail', msg: '博客详情接口' }
]
const blogPostMapList = [
  { url: '/api/blog/new', msg: '新建博客接口' },
  { url: '/api/blog/update', msg: '更新博客接口' },
  { url: '/api/blog/delete', msg: '删除博客接口' }
]


const handleBlogRouter = (request: any, response) => {
  const { method, url } = request;
  const path = url.split('?')[0];


  switch (method) {
    case 'GET': {
      for (let i = 0; i < blogGetMapList.length; i++) {
        const item = blogGetMapList[i];
        if (path === item.url) {
          return { msg: item.msg }
        }
      }
    }

    case 'POST': {
      for (let i = 0; i < blogPostMapList.length; i++) {
        const item = blogPostMapList[i];
        if (path === item.url) {
          return { msg: item.msg }
        }
      }
    }
  }
}

module.exports = handleBlogRouter;