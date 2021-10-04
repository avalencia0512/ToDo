var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET page two. */
router.get('/pageTwo', function (req, res, next) {
    res.render('pageTwo.jade', { title: 'Page 2' });
});

/* GET page three. */
router.get('/pageThree', function (req, res, next) {
    res.render('pageThree.jade', { title: 'Page 3' });
});

module.exports = router;