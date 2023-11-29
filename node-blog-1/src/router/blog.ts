import { IncomingMessage, ServerResponse } from 'http';
import { getList, getDetail, newBlog, updateBlog, deleteBlog } from '../controller/blog'
import { SuccessModel, ErrorModel } from '../model/responseModel'
// 博客get接口
const blogGetMapList = [
  { url: '/api/blog/list', msg: '博客列表接口' },
  { url: '/api/blog/detail', msg: '博客详情接口' }
]

// 博客post接口
const blogPostMapList = [
  { url: '/api/blog/new', msg: '新建博客接口' },
  { url: '/api/blog/update', msg: '更新博客接口' },
  { url: '/api/blog/delete', msg: '删除博客接口' }
]


const handleBlogRouter = (request: IncomingMessage, response: ServerResponse) => {
  const { method, url } = request;
  const path = url?.split('?')[0];

  // 获取id
  const id = (request as any).query.id;

  switch (method) {
    case 'GET': {
      if (path === '/api/blog/list') {
        const author = (request as any).query.author || '';
        const keyword = (request as any).query.keyword || '';
        const data = getList(author, keyword);
        return new SuccessModel(data);
      }
      if (path === '/api/blog/detail') {
        const data = getDetail(id);
        return new SuccessModel(data);
      }
      // for (let i = 0; i < blogGetMapList.length; i++) {
      //   const item = blogGetMapList[i];
      //   if (path === item.url) {
      //     return { msg: item.msg }
      //   }
      // }
    }

    case 'POST': {

      if (path === '/api/blog/new') {
        const blogData = (request as any).body
        const data = newBlog(blogData);
        return new SuccessModel(data);
      }

      if (path === '/api/blog/update') {
        const blogData = (request as any).body
        const data = updateBlog(id, blogData);
        return new SuccessModel(data);
      }

      if (path === '/api/blog/delete') {
        const data = deleteBlog(id);
        if (data) {
          return new SuccessModel(data);
        } else {
          return new ErrorModel('删除失败');
        }
      }
    }
  }
}


module.exports = handleBlogRouter;