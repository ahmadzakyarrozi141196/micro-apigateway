const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env;


const verifyToken = require('../middlewares/verifyToken')
const mediaHandler = require('./handler/media')

/* GET users listing. */
// router.('/', function(req, res, next) {
//   res.send("media");
// });

router.post('/', mediaHandler.Create)
router.get('/',verifyToken, mediaHandler.getAll)
router.delete('/:id', mediaHandler.Destroy)
module.exports = router;
