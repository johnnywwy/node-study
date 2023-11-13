// 学会使用debug
// console.log('100');
// console.log('200');
// console.log('300');
// console.log('400');
// console.log('500');
// console.log('600');


// 学会使用debug
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  console.log('heiheihei');
  res.end('<h1>Hello World</h1>')
})

server.listen(8888, () => {
  console.log('服务器启动成功')
})