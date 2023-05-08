require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//package parsing lib
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
// app.use(logger(''));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route file
const indexRouter = require('./routes/index');
const user = require('./routes/user');
const usergroup = require('./routes/usergroup');
const product = require('./routes/product');
const transaksi = require('./routes/transaksi');
const detailtransaksi = require('./routes/detailtransaksi');
const temptransaksi = require('./routes/temptransaksi');
const customer = require('./routes/customer');

//route url get
app.use('/', indexRouter);
app.use('/user', user);
app.use('/usergroup', usergroup);
app.use('/product', product);
app.use('/transaksi', transaksi);
app.use('/detailtransaksi', detailtransaksi);
app.use('/temptransaksi', temptransaksi);
app.use('/customer', customer);

//route url post
app.use('/user/add', user);
app.use('/usergroup/add', usergroup);
app.use('/product/add', product);
app.use('/transaksi/add', transaksi);
app.use('/detailtransaksi/add', detailtransaksi);
app.use('/temptransaksi/add', temptransaksi);
app.use('/customer/add', customer);

//route url put
app.use('/user/edit/:id', user);
app.use('/usergroup/edit/:id', usergroup);
app.use('/product/edit/:id', product);
app.use('/transaksi/edit/:id', transaksi);
app.use('/detailtransaksi/edit/:id', detailtransaksi);
app.use('/temptransaksi/edit/:id', temptransaksi);
app.use('/customer/edit/:id', customer);

//route url delete
app.use('/user/:id', user);
app.use('/usergroup/:id', usergroup);
app.use('/product/:id', product);
app.use('/transaksi/:id', transaksi);
app.use('/detailtransaksi/:id', detailtransaksi);
app.use('/temptransaksi/:id', temptransaksi);
app.use('/customer/:id', customer);

module.exports = app;
