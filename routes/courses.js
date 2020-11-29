var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const coursesHandler = require('./handler/courses');

const punyarole = require('../middlewares/permission')
const verifyToken = require('../middlewares/verifyToken')

router.post('/', verifyToken, punyarole('admin'), coursesHandler.create)
router.put('/:id', verifyToken, punyarole('admin', 'student'), coursesHandler.update)
router.delete('/:id', verifyToken, punyarole('admin'), coursesHandler.destroy)


router.get('/:id',verifyToken, coursesHandler.get)
router.get('/',verifyToken, coursesHandler.getAll)
module.exports = router;
