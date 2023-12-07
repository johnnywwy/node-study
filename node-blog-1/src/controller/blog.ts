import exec from "../db/mysql"
import { blogDataDTO } from "../types"

// 获取博客列表
export const getList = (author?: string, keyword?: string): Promise<any> => {
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
export const getDetail = (id?: string) => {
  const sql = `select * from blogs where id='${id}' `
  return exec(sql).then(res => {
    console.log('博客详情', res);

    return res[0]
  })
}

// 新增博客
export const newBlog = (blogData: blogDataDTO) => {
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
export const updateBlog = (id: string, blogData: blogDataDTO) => {
  console.log('new Blog Data.........', id);

  return {
    id: 6656566656566 // 更新成功后返回的 id
  }
}

// 删除博客
export const deleteBlog = (id: string) => {
  return false
}
