
import { exec, escape } from "../db/mysql"

// 登录校验
export const login = (username: string, password: string) => {

  username = escape(username)
  password = escape(password)

  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`

  return exec(sql).then((result) => {
    return result[0] || {}
  })

}
