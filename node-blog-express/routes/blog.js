const {
  getList, getDetail, newBlog, updateBlog, deleteBlog
} = require('../controller/blog')

const {
  SuccessModel, ErrorModel
} = require('../model/responseModel')


const express = require('express');
const router = express.Router();

// 中间件
const loginCheck = require('../middleware/loginCheck')

/** 获取博客详列表 */
router.get('/list', (req, res, next) => {
  // res.render('index', { title: 'Express' });

  let author = req.query.author || ''
  const keyword = req.query.keyword || ''

  console.log('req.query.isadmin', req.query.isadmin);
  if (req.query.isadmin) {
    // 管理员页面
    if (req.session.username == null) {
      // 未登录
      res.json(
        new ErrorModel('未登录')
      )
      return
    }
    // 强制查询自己的博客
    author = req.session.username
  }

  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(new SuccessModel(listData))
  })


});

/** 获取博客详情 */
router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.id)
  return result.then(data => {
    res.json(new SuccessModel(data))
  })
});

/** 新增博客接口 */
router.post('/new', loginCheck, (req, res, next) => {
  req.body.author = req.session.username

  const result = newBlog(req.body);
  return result.then((data) => {
    res.json(new SuccessModel(data))
  })
})

/** 更新博客接口 */
router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body)
  return result.then(val => {
    if (val) {
      res.json(new SuccessModel())
    } else {
      res.json(new ErrorModel('更新博客失败'))
    }
  })
})



module.exports = router;