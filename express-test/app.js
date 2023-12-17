import { express } from "express";

// 当前app 是一个 express 实例
const app = express();

app.use((req, res, next) => {
  console.log('请求开始...', req.method, req.url);
  next();
})

app.use((req, res, next) => {
  // 假设在处理cookie
  req.cookie = {
    userId: 'abc123'
  }
  next();
})

app.use((req, res, next) => {
  // 假设处理 post data
  // 异步
  setTimeout(() => {
    req.body = {
      a: 100,
      b: 200
    }
    next();
  })
})