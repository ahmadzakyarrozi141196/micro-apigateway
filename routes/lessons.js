const express = require('express')

const router = express.Router()


const lessonHandler = require('./handler/lessons')
const jwtVerify = require('../middlewares/verifyToken')

router.post('/', jwtVerify,lessonHandler.create)
router.get('/', jwtVerify,lessonHandler.getall)
router.get('/:id', jwtVerify,lessonHandler.get)
router.put('/:id', jwtVerify,lessonHandler.update)
router.delete('/:id',jwtVerify, lessonHandler.destroy)

module.exports = router;