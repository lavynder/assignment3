// REFERENCED FROM THE PROFESSOR AHMED'S VIDEOS 

var express = require('express');
var router = express.Router();

/* BY DEFAULT, GET THE Home PAGE */
router.get('/', function(req, res, next) {
  res.render('pages/home', { 
    title: 'Home'
  });
});

/* GET THE Home PAGE */
router.get('/home', function(req, res, next) {
  res.render('pages/home', {
    title: "Home"
  });
});

/* GET THE About ME PAGE */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { 
    title: 'About Monster Hunter'
  });
});

module.exports = router;