require('dotenv').config();
require('./models/connection');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var promotionsRouter = require('./routes/promotions');
var clientListRouter = require('./routes/clientList');
var newsletterRouter = require('./routes/newsletter');
var serverRouter = require('./routes/server');

var app = express();
const cors = require('cors');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use('/promotions', promotionsRouter);
app.use('/clientList', clientListRouter);
app.use('/newsletter', newsletterRouter);
app.use('/server', serverRouter);

module.exports = app;
