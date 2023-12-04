import mysql from 'mysql'

import MYSQL_CONF from '../config/db'
console.log('MYSQL_CONF', MYSQL_CONF);


// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()


/**
 * 执行数据库操作
 * @param {string} sql - SQL语句
 * @returns {Promise} - 返回一个Promise对象，包含执行结果
 */
function exec(sql: string) {
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

export default exec
