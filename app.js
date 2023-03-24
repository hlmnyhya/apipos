require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var user = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', user);



module.exports = app;
