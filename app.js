require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const user = require('./src/routes/user');
const usergroup = require('./src/routes/usergroup');
const menu = require('./src/routes/menu');
const submenu = require('./src/routes/submenu');
const menuakses = require('./src/routes/menuakses');
const barang = require('./src/routes/barang');
const product = require('./src/routes/product');
const order = require('./src/routes/order');
const customer = require('./src/routes/customer');
const supplier = require('./src/routes/supplier');
const transaksi = require('./src/routes/transaksi');
const detailproduct = require('./src/routes/detailproduct');
const detailtransaksi = require('./src/routes/detailtransaksi');


app.use('/', user);
app.use('/', usergroup);
app.use('/', menu);
app.use('/', submenu);
app.use('/', menuakses);
app.use('/', barang);
app.use('/', product);
app.use('/', order);
app.use('/', customer);
app.use('/', supplier);
app.use('/', transaksi);
app.use('/', detailproduct);
app.use('/', detailtransaksi);




app.listen(PORT, () => console.log(`Server running at port: ${PORT} | Database Connected`));
