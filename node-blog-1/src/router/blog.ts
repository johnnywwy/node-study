import { IncomingMessage, ServerResponse } from 'http';
import { getList, getDetail } from '../controller/blog'
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


  switch (method) {
    case 'GET': {
      if (path === blogGetMapList[0].url) {
        const author = (request as any).query.author || '';
        const keyword = (request as any).query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModel(listData);
      }
      if (path === blogGetMapList[1].url) {
        const id = (request as any).query.id || '';
        const listData = getDetail(id);
        return new SuccessModel(listData);
      }
      // for (let i = 0; i < blogGetMapList.length; i++) {
      //   const item = blogGetMapList[i];
      //   if (path === item.url) {
      //     return { msg: item.msg }
      //   }
      // }
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