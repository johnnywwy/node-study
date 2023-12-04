const http = require('http')
const dotenv = require('dotenv');
const path = require('path');

// 加载 配置文件
const envFile = path.join(__dirname, '../.env', `.env.${process.env.NODE_ENV || 'dev'}`);

const result = dotenv.config({ path: envFile });

if (result.error) {
  throw result.error;
}

// 根据环境加载不同的配置文件
console.log('环境变量加载成功');
console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);


const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
console.log('服务器启动成功，监听8000端口');
server.listen(PORT)




