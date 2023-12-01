export const loginCheck = (username: string, password: string) => {
  // 假数据
  if (username === 'zhangsan' && password === '123456') {
    return true
  }
  return false
}
