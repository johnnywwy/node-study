const env = process.env.NODE_ENV;// 环境参数

console.log('env666', env);

// mysql配置
let MYSQL_CONF = {}

// redis 配置
let REDIS_CONF = {}

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
  }
  REDIS_CONF = 'redis://localhost:6379'
}

if (env === 'pro') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
  }

  REDIS_CONF = 'redis://localhost:6379'

}

export { MYSQL_CONF, REDIS_CONF };


