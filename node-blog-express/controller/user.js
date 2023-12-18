
const { exec } = require('../db/mysql')

// 登录校验
const login = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}'`

  return exec(sql).then((result) => {
    return result[0] || {}
  })

}

module.exports = { login }
