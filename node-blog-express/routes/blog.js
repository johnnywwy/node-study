var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    errno: 0,
    data: [{
      id: 1,
      title: '标题1',
      content: '内容1',
      create_time: '2018-01-01 12:00:00'
    }, {
      id: 2,
      title: '标题2',
      content: '内容2',
      create_time: '2018-01-02 12:00:00'
    }]
  })
});

module.exports = router;