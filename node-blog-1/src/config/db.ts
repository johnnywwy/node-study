const env = process.env.NODE_ENV;// 环境参数

console.log('env', env);

// host: 'localhost',
// user: 'root',
// password: '123456',
// port: 3306,
// database: 'myblog'

// 配置
let MYSQL_CONF = {}

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
  }
  console.log('来这里了吗');
}

if (env === 'pro') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
  }
}

export default MYSQL_CONF;


