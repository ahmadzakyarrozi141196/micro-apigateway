const express = require('express');
const router = express.Router();

const chapterHandler = require('./handler/chapters')
const jwtVerify = require('../middlewares/verifyToken')
router.post('/', jwtVerify,chapterHandler.create)
router.put('/:id', jwtVerify,chapterHandler.update)
router.get('/', jwtVerify,chapterHandler.getall)
router.get('/:id',jwtVerify, chapterHandler.get)
router.delete('/:id', jwtVerify,chapterHandler.destroy)
module.exports = router;