const http = require('http');

// http的get请求
const querystring = require('querystring');

/**
 * get请求
 */

// const server1 = http.createServer((req, res) => {
//   console.log('method', req.method);
//   // res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // res.end('Hello World\n');
//   const url = req.url;
//   console.log('url', url);
//   req.query = querystring.parse(url.split('?')[1]);
//   console.log('query', req.query);

//   res.end(JSON.stringify(req.query));
// });

// server1.listen(8888, () => {
//   console.log('Server running on port 3000');
// });


/**
 *  post请求
 */
// const server2 = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     // 数据格式
//     console.log('content-type', req.headers['content-type']);
//     let postData = '';
//     req.on('data', (chunk) => {
//       postData += chunk.toString();
//       req.on('end', () => {
//         console.log('postData', postData);
//         res.end('post 完啦');
//       });
//     });
//   }
// })

// server2.listen(8888, () => {
//   console.log('Server running on port 8888');
// });

/**
 *
 *  curl -d '{"username":"fuck", "password":"fuck linping 3000 time"}' -H "Content-Type: application/json" -X POST http://localhost:8888
 */



/**
 *  综合事例
 */
const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);
  // 设置返回josn
  res.setHeader('Content-Type', 'application/json');
  const resData = {
    method,
    url,
    path,
    query
  }
  if (method === 'GET') {
    res.end(JSON.stringify(resData));
  }
  if (method === 'POST') {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString();
      req.on('end', () => {
        res.end(JSON.stringify({
          postData
        }));
      });
    });
  }
})