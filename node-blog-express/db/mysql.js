const mysql = require('mysql');


// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'myblog'
})


//  连接数据库
con.connect()


/**
 * 执行数据库操作
 * @param {string} sql - SQL语句
 * @returns {Promise} - 返回一个Promise对象，包含执行结果
 */


function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = { exec, excape: mysql.escape }
