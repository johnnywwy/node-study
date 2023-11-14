const userPostMapList = [
  { url: '/api/user/login', msg: '用户登录' },
]


const handleUserRouter = (request, response) => {
  const { method, url } = request;
  const path = url.split('?')[0];

  switch (method) {
    case 'GET': {
      // 表驱动
      // for (let i = 0; i < getMapList.length; i++) {
      //   const item = getMapList[i];
      //   if (path === item.url) {
      //     return { msg: item.msg }
      //   }
      // }
    }

    case 'POST': {
      for (let i = 0; i < userPostMapList.length; i++) {
        const item = userPostMapList[i];
        if (path === item.url) {
          return { msg: item.msg }
        }
      }
    }
  }
}

module.exports = handleUserRouter;