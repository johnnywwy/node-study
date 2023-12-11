// import mysql from 'mysql';
import { RowDataPacket, OkPacket } from 'mysql';

const mysql = require('mysql');

import { MYSQL_CONF, REDIS_CONF } from '../config/db';
console.log('kank', MYSQL_CONF, REDIS_CONF);


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

type ExecResult<T = RowDataPacket[]> = T | OkPacket;

function exec<T = RowDataPacket[]>(sql: string): Promise<ExecResult<T>> {
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
