var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET page one. */
router.get('/pageOne', function(req, res, next) {
  res.render('pageOne.jade', { title: 'Page 1' });
});

module.exports = router;
