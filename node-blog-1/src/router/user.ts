import { mapList } from '../types';
import { IncomingMessage, ServerResponse } from 'http';
import { loginCheck } from '../controller/user';
import { SuccessModel, ErrorModel } from '../model/responseModel'

// 用户get接口
const userPostMapList: mapList[] = [
  { url: '/api/user/login', msg: 'login success' },
]


const handleUserRouter = (request: IncomingMessage, response: ServerResponse) => {
  const { method, url } = request;
  const path = url?.split('?')[0];

  switch (method) {
    case 'GET': {
      // if (path === '/api/user/login') {
      //   return { msg: 'login success' }
      // }
    }

    case 'POST': {
      if (path === '/api/user/login') {
        const { username, password } = (request as any).body;
        const result = loginCheck(username, password);
        if (result) {
          return new SuccessModel()
        }
        return new ErrorModel('用户名或密码错误');
      }
    }
  }
}

module.exports = handleUserRouter;