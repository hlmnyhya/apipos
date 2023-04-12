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
const user = require('./routes/users');
const usergroup = require('./routes/usergroups');
const items = require('./routes/items');
const customers = require('./routes/customers');
const productdetails = require('./routes/productdetails');
const transactiondetails = require('./routes/transactiondetails');
const menus = require('./routes/menus');
const accessmenus = require('./routes/accesmenus');
const orders = require('./routes/orders');
const products = require('./routes/products');
const submenus = require('./routes/submenus');
const suppliers = require('./routes/suppliers');
const transactions = require('./routes/transactions');

//route url get
app.use('/', indexRouter);
app.use('/user', user);
app.use('/usergroup', usergroup);
app.use('/items', items);
app.use('/customers', customers);
app.use('/productdetails', productdetails);
app.use('/transactiondetails', transactiondetails);
app.use('/menus', menus);
app.use('/accessmenus', accessmenus);
app.use('/orders', orders);
app.use('/products', products);
app.use('/submenus', submenus);
app.use('/suppliers', suppliers);
app.use('/transactions', transactions);

//route url post
app.use('/user/add', user);
app.use('/usergroup/add', usergroup);
app.use('/items/add', items);
app.use('/customers/add', customers);
app.use('/productdetails/add', productdetails);
app.use('/transactiondetails/add', transactiondetails);
app.use('/menus/add', menus);
app.use('/accessmenus/add', accessmenus);
app.use('/orders/add', orders);
app.use('/products/add', products);
app.use('/submenus/add', submenus);
app.use('/suppliers/add', suppliers);
app.use('/transactions/add', transactions);

//route url put
app.use('/user/edit/:id', user);
app.use('/usergroup/edit/:id', usergroup);
app.use('/items/edit/:id', items);
app.use('/customers/edit/:id', customers);
app.use('/productdetails/edit/:id', productdetails);
app.use('/transactiondetails/edit/:id', transactiondetails);
app.use('/menus/edit/:id', menus);
app.use('/accessmenus/edit/:id', accessmenus);
app.use('/orders/edit/:id', orders);
app.use('/products/edit/:id', products);
app.use('/submenus/edit/:id', submenus);
app.use('/suppliers/edit/:id', suppliers);
app.use('/transactions/edit/:id', transactions);

//route url delete
app.use('/user/:id', user);
app.use('/usergroup/:id', usergroup);
app.use('/items/:id', items);
app.use('/customers/:id', customers);
app.use('/productdetails/:id', productdetails);
app.use('/transactiondetails/:id', transactiondetails);
app.use('/menus/:id', menus);
app.use('/accessmenus/:id', accessmenus);
app.use('/orders/:id', orders);
app.use('/products/:id', products);
app.use('/submenus/:id', submenus);
app.use('/suppliers/:id', suppliers);
app.use('/transactions/:id', transactions);

module.exports = app;
