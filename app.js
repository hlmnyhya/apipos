require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

//package parsing lib
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route file
var indexRouter = require('./routes/index');
var user = require('./routes/user');
var usergroup = require('./routes/usergroup');
var barang = require('./routes/barang');
var customer = require('./routes/customer');
var detailproduct = require('./routes/detailproduct');
var detailtransaksi = require('./routes/detailtransaksi');
var menu = require('./routes/menu');
var menuakses = require('./routes/menuakses');
var order = require('./routes/order');
var product = require('./routes/product');
var submenu = require('./routes/submenu');
var supplier = require('./routes/supplier');
var transaksi = require('./routes/transaksi');

//route url get
app.use('/', indexRouter);
app.use('/api/user', user);
app.use('/api/usergroup', usergroup);
app.use('/api/barang', barang);
app.use('/api/customer', customer);
app.use('/api/detailproduct', detailproduct);
app.use('/api/detailtransaksi', detailtransaksi);
app.use('/api/menu', menu);
app.use('/api/menuakses', menuakses);
app.use('/api/order', order);
app.use('/api/product', product);
app.use('/api/submenu', submenu);
app.use('/api/supplier', supplier);
app.use('/api/transaksi', transaksi);

//route url post
app.use('/api/user/add', user);
app.use('/api/usergroup/add', usergroup);
app.use('/api/barang/add', barang);
app.use('/api/customer/add', customer);
app.use('/api/detailproduct/add', detailproduct);
app.use('/api/detailtransaksi/add', detailtransaksi);
app.use('/api/menu/add', menu);
app.use('/api/menuakses/add', menuakses);
app.use('/api/order/add', order);
app.use('/api/product/add', product);
app.use('/api/submenu/add', submenu);
app.use('/api/supplier/add', supplier);
app.use('/api/transaksi/add', transaksi);

//route url put
app.use('/api/user/edit/:id', user);
app.use('/api/usergroup/edit/:id', usergroup);
app.use('/api/barang/edit/:id', barang);
app.use('/api/customer/edit/:id', customer);
app.use('/api/detailproduct/edit/:id', detailproduct);
app.use('/api/detailtransaksi/edit/:id', detailtransaksi);
app.use('/api/menu/edit/:id', menu);
app.use('/api/menuakses/edit/:id', menuakses);
app.use('/api/order/edit/:id', order);
app.use('/api/product/edit/:id', product);
app.use('/api/submenu/edit/:id', submenu);
app.use('/api/supplier/edit/:id', supplier);
app.use('/api/transaksi/edit/:id', transaksi);

//route url delete
app.use('/api/user/:id', user);
app.use('/api/usergroup/:id', usergroup);
app.use('/api/barang/:id', barang);
app.use('/api/customer/:id', customer);
app.use('/api/detailproduct/:id', detailproduct);
app.use('/api/detailtransaksi/:id', detailtransaksi);
app.use('/api/menu/:id', menu);
app.use('/api/menuakses/:id', menuakses);
app.use('/api/order/:id', order);
app.use('/api/product/:id', product);
app.use('/api/submenu/:id', submenu);
app.use('/api/supplier/:id', supplier);
app.use('/api/transaksi/:id', transaksi);

module.exports = app;
