const env = process.env.NODE_ENV;// 环境参数

console.log('env', env);

// host: 'localhost',
// user: 'root',
// password: '123456',
// port: 3306,
// database: 'myblog'

// 配置
export const MYSQL_CONF = {
  env
}

