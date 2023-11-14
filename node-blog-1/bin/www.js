const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
console.log('服务器启动成功，监听8000端口');
server.listen(PORT)
