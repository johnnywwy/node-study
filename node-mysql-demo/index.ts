import mysql from 'mysql'

//  创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'myblog'
})

//  连接数据库
con.connect()

//  定义查询语句
const sql = 'select * from users'

con.query(sql, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})

// 关闭连接
con.end()
