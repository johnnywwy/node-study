
import exec from "../db/mysql"

// 登录校验
export const loginCheck = (username: string, password: string) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`

  return exec(sql).then((result) => {
    return result[0] || {}
  })

}
