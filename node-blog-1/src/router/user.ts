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
            return new SuccessModel()
          }
          return new ErrorModel('登录失败！');
        })

      }
    }
  }
}

module.exports = handleUserRouter;