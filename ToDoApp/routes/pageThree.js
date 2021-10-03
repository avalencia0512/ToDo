var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET page one. */
router.get('/pageOne', function (req, res, next) {
    res.render('pageOne.jade', { title: 'Page 1' });
});

/* GET page two. */
router.get('/pageTwo', function (req, res, next) {
    res.render('pageTwo.jade', { title: 'Page 2' });
});


module.exports = router;