
// 3RD PARTY PACKAGES
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter); // localhost:3000
app.use('/users', usersRouter); // localhost:3000/users

// CATCH 404 ERRORS AND FORWARD TO ERROR
app.use(function(req, res, next) {
    next(createError(404));
  });

// ERROR HANDLER
app.use(function(err, req, res, next) {
    // SET LOCALS, ONLY PROVIDE ERROR FOR DEV
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // RENDER ERROR PAGE
    res.status(err.status || 500);
    res.render('error',
    {
      title:"Error"
    }
    );
  });
  
  module.exports = app;