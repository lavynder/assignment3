// REFERENCED FROM THE PROFESSOR AHMED'S VIDEOS 

var express = require('express');
var router = express.Router();

/* BY DEFAULT, GET THE Home PAGE */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET THE Home PAGE */
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: "Home"
  });
});

/* GET THE About ME PAGE */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Me'
  });
});

/* GET THE Projects PAGE */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
  });
});

/* GET THE Contact Me PAGE */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Me'
  });
});

module.exports = router;
