// REFERENCED FROM THE PROFESSOR AHMED'S VIDEOS 

let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');

/* BY DEFAULT, GET THE Home PAGE */
router.get('/', indexController.displayHomePage);

/* GET THE Home PAGE */
router.get('/home', indexController.displayHomePage);

module.exports = router;