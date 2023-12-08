#### docker连接数据库


1. docker启动数据库

```bash
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=test -e MYSQL_USER=test -e MYSQL_PASSWORD=123456 mysql:5.7
``` 


2. 连接数据库

```bash
mysql -h 127.0.0.1 -P 3306 -u test -p123456
```

#### 连接数据库的两种方式

- 方式一：使用命令行工具连接数据库

```bash
docker exec -it mysql /bin/bash
```

#### 进入数据库

```bash
mysql -u root -p123456
```

#### 显示数据库

```bash
show databases;
```

#### 创建数据库

```bash
create database myblog;
```

#### 切换数据库

```bash
use myblog;
```

#### 查询数据表

```bash
SHOW TABLES;

```


#### 创建表

```bash
# 创建users表
create table users(
    id int primary key auto_increment,
    username varchar(20) not null,
    password varchar(20) not null,
    realname VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL 
);


# 创建blogs表
-- CREATE TABLE blogs (
--   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   title VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
--   content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
--   createTime BIGINT(20) NOT NULL DEFAULT 0,
--   author VARCHAR(20) NOT NULL
-- );
```

#### 显示表

```bash
show tables;
```

#### 插入数据

```bash
insert into users(username,password,realname) values('zhangsan','123456','张三');

insert into blogs(title,content,createTime,author) values('我是标题','我是内容啦哈哈哈哈哈，你肯定没想到我是内容吧，事实上我真的是内容，我保证','1701423114633','zhangsan');

```

#### 查询数据

```bash
select * from users;//查询所有数据

select id,username from users;//查询列为id和username的数据

select * from users where id=1;//查询id为1的数据

select * from users where username='zhangsan';//查询username为zhangsan的数据

select * from users where username like 'zhang%';//查询username以zhang开头的数据

select * from users where username like '%san';//查询username以san结尾的数据

select * from users where username like '%san%';//查询username中包含san的数据

select * from users where username='zhangsan' and password='123456'; //查询username为zhangsan，password为123456的数据

select * from users where username='zhangsan' or password='123'; //查询username为zhangsan或者password为123456的数据

select * from users where password like '%123%' order by id desc;//按id降序排列

select * from users order by id asc;//按id升序排列

```

#### 删除数据

```bash
delete from users where username='zhaoliu';

# 软删除
update users set state=0 where username='zhaoliu';

# 物理删除
delete from users where username='zhaoliu';

# 查询软删除的数据
select * from users where state=0;

# 按照时间排序
select * from blogs where order by createTime desc;

```

#### 更新数据

```bash
SET SQL_SAFE_UPDATES = 0;//关闭sql注入保护

update users set realname="李四2" where username='lisi';

insert into blogs(title,content,creatTime,author) values('我是标题','我是内容啦哈哈哈哈哈，你肯定没想到我是内容吧，事实上我真的是内容，我保证','李四2','1701423114633','zhangsan');

```

#### 退出

```bash
exit
``` 

