const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose} = require('./db');

var productController = require('./service/product/product-controller');

var app = express();

//var angularHost ="http://localhost";
var angularHost = process.env.ANGULAR_HOST;
var host="0.0.0.0";

app.use(bodyParser.json());

//app.use(cors({ origin: '*'}));
app.use(cors({ origin: angularHost}));

app.listen(3000, host, () =>{ console.log('Server started successfully!!')});

app.use('/api/products', productController);


