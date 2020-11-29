var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const webhookHandler = require('./handler/webhook');

const verifyToken = require('../middlewares/verifyToken')

router.post('/', webhookHandler.webhook)

module.exports = router;
