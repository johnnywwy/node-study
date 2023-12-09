declare module 'http' {
  interface IncomingMessage {
    cookie: Record<string, string>;
    path: string;
    query: Record<string, string | string[]>;
  }
}

import { IncomingMessage, ServerResponse } from 'http';
import { login } from '../controller/user';
import { SuccessModel, ErrorModel } from '../model/responseModel'

const handleUserRouter = (request: IncomingMessage, response: ServerResponse): Promise<any> => {
  const { method, url } = request;
  const path = url?.split('?')[0];

  switch (method) {

    case 'POST': {
      if (path === '/api/user/login') {
        const { username, password } = (request as any).body;
        const result = login(username, password);
        return result.then(res => {
          if (res.username) {
            // 操作cookie
            // response.setHeader('Set-Cookie', `username=${res.username}; path=/; httpOnly`);
            return new SuccessModel()
          }
          return new ErrorModel('登录失败！');
        })

      }
    }

    // 登录验证测试
    case 'GET': {
      if (path === '/api/user/login-test') {
        if (request.cookie.username) {
          return Promise.resolve(new SuccessModel())
        }
        return Promise.resolve(new ErrorModel('未登录！'))
      }
    }
  }
}

module.exports = handleUserRouter;