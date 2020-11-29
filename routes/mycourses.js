const express = require('express')
const router = express.Router();


const MyCoursesHandler = require('./handler/my-courses')


router.post('/', MyCoursesHandler.create)
router.get('/:id', MyCoursesHandler.get)

module.exports = router