const {
  getList, getDetail, newBlog, updateBlog, deleteBlog
} = require('../controller/blog')

const {
  SuccessModel, ErrorModel
} = require('../model/responseModel')


const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/list', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  const author = req.query.author || ''
  const keyword = req.query.keyword || ''

  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(new SuccessModel(listData))
  })


});

module.exports = router;