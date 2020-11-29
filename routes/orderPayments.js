var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const orderPaymentsHandler = require('./handler/order-payment');

const verifyToken = require('../middlewares/verifyToken')

router.get('/', orderPaymentsHandler.getOrders)

module.exports = router;
