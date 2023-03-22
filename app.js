require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/user');
app.use('/', appRoute);


app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));