declare module 'http' {
  interface IncomingMessage {
    cookie: Record<string, string>;
    path: string;
    query: Record<string, string | string[]>;
    session: Record<string, string | string[]>;
    sessionId: string;
  }
}

import { IncomingMessage, ServerResponse } from 'http';
import { login } from '../controller/user';
import { SuccessModel, ErrorModel } from '../model/responseModel'
import { setRedis } from '../db/redis';


const handleUserRouter = (request: IncomingMessage, response: ServerResponse): Promise<any> => {
  const { method, url } = request;
  const path = url?.split('?')[0];

  switch (method) {

    // case 'POST': {
    //   if (path === '/api/user/login') {
    //     const { username, password } = (request as any).body;
    //     const result = login(username, password);
    //     console.log('result666', result);


    //     return result.then(res => {
    //       console.log('res是什么', res);

    //       if (res.username) {
    //         request.session.username = res.username;
    //         request.session.realname = res.realname;

    //         console.log(' request.session is', request.session);

    //         // 操作cookie
    //         // response.setHeader('Set-Cookie', `username=${res.username}; path=/; httpOnly`);
    //         return new SuccessModel()
    //       }
    //       return new ErrorModel('登录失败！');
    //     })

    //   }
    // }

    // 登录验证测试
    case 'GET': {

      if (path === '/api/user/login') {
        console.log('request', request.query);
        // request.body

        const { username, password } = (request as any).query;
        const result = login(username, password);
        console.log('result666', result);


        return result.then(res => {
          console.log('res是什么', res);

          if (res.username) {
            request.session.username = res.username;
            request.session.realname = res.realname;
            console.log(' request.session is', request.session);

            // 将session存入redis
            setRedis(request.sessionId, request.session)

            // 操作cookie
            // response.setHeader('Set-Cookie', `username=${res.username}; path=/; httpOnly`);
            return new SuccessModel()
          }
          return new ErrorModel('登录失败！');
        })

      }

      if (path === '/api/user/login-test') {
        // if (request.cookie.username) {
        //   return Promise.resolve(new SuccessModel())
        // }
        // return Promise.resolve(new ErrorModel('未登录！'))
        // request.session
        console.log('test', request.session);

        if (request.session?.username) {
          return Promise.resolve(new SuccessModel({
            username: request.session.username
          }))
        }
        return Promise.resolve(new ErrorModel('未登录！'))
      }
    }
  }
}

module.exports = handleUserRouter;