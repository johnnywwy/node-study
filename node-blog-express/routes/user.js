var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  const { username, password } = req.body;
  res.json({
    errno: 0,
    data: [{
      username,
      password,
    }]
  })
});

module.exports = router;