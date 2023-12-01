use myblog;
-- update users set realname="李四2" where username='lisi';

-- insert into users(username,password,realname) values('zhaoliu','123456','赵六');

select * from blogs; 

-- delete from users where username='zhaoliu';

-- update users set realname="张三" where username='zhangsan'; 
 -- insert into blogs(title,content,createTime,author) values('我是标题3333','嘻嘻嘻嘻嘻嘻，','1701423990460','wangwu');

-- CREATE TABLE blogs (
--   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
--   content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
--   createTime BIGINT(20) NOT NULL DEFAULT 0,
--   author VARCHAR(20) NOT NULL
-- );

select * from blogs where content like 'lisi' order by createTime desc;