"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
//  创建连接对象
var con = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'myblog'
});
//  连接数据库
con.connect();
//  定义查询语句
var sql = 'select * from user';
con.query(sql, function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});
// 关闭连接
con.end();
