const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env;

const userHandler = require('./handler/users')
const verifyToken = require('../middlewares/verifyToken')

/* GET users listing. */
// router.('/', function(req, res, next) {
//   res.send("media");
// });

router.post('/register', userHandler.register)
router.post('/login', userHandler.login)
//jika update profile harus login dlu
router.put('/', verifyToken, userHandler.update)
router.get('/', verifyToken, userHandler.getUser)
router.post('/logout', verifyToken, userHandler.logout)

module.exports = router;
