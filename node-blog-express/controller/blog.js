const { exec } = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `

  if (author) {
    sql += `and author = '${author}' `
  }

  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }

  sql += `order by createtime desc;`

  // 返回 Promise
  return exec(sql)
}

// 获取博客详情
const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}' `
  return exec(sql).then(res => {
    console.log('博客详情', res);

    return res[0]
  })
}

// 新增博客
const newBlog = (blogData) => {
  const { title, content, author } = blogData
  const createTime = Date.now()

  const sql = `
    insert into blogs (title, content, author, createTime) 
    values ('${title}', '${content}', '${author}', ${createTime});
  `
  return exec(sql).then(res => {
    console.log('新增博客', res);
    return res.insertId
  })
}

// 更新博客
const updateBlog = (id, blogData) => {
  console.log('new Blog Data.........', id);

  const { title, content } = blogData
  const sql = `
    update blogs 
    set title='${title}', content='${content}'
    where id='${id}';
  `

  return exec(sql).then(res => {
    console.log('更新结果', res);
    if (res.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除博客
const deleteBlog = (id, author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}';`
  return exec(sql).then(res => {
    console.log('删除成功', res);
    if (res.affectedRows > 0) {
      return true
    }
    return false
  })
}


module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};