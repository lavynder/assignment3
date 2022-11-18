let express = require('express');
let router = express.Router();

// DISPLAY HOME PAGE
module.exports.displayHomePage = (req, res, next) => {
    res.render('pages/home', { 
        title: 'Home'
      });
}
