require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const ordersPaymentsRouter = require('./routes/orderPayments');
// const paymentsRouter = require('./routes/payments');
const mediaRouter = require('./routes/media')
const refreshTokenRouter = require('./routes/refreshToken')
const mentorRouter = require('./routes/mentors');
//verifytoken untuk akses route tertentu
const verifyToken = require('./middlewares/verifyToken')
const chapterRouter = require('./routes/chapters')
const lessonRouter = require('./routes/lessons')
const imageCoursesRouter = require('./routes/imageCourses')
const myCoursesRouter = require('./routes/mycourses')
const reviewRouter = require('./routes/Reviews')
const webhookRouter = require('./routes/webhook');
const punyarole = require('./middlewares/permission')
var app = express();

app.use(logger('dev'));
app.use(express.json({limit : '100mb'}));
app.use(express.urlencoded({ extended: false, limit: '100mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter)
app.use('/chapters',verifyToken, punyarole('admin'), chapterRouter)
app.use('/lessons',verifyToken, punyarole('admin'), lessonRouter)
app.use('/orders', verifyToken,  punyarole('admin', 'student'), ordersPaymentsRouter)
// app.use('/payments', paymentsRouter)
app.use('/image-courses', verifyToken, punyarole('admin'), imageCoursesRouter)
app.use('/media',verifyToken, punyarole('admin', 'student'), mediaRouter)
app.use('/webhook', webhookRouter)
app.use('/refresh-tokens', refreshTokenRouter)
app.use('/mentors',verifyToken,  punyarole('admin'), mentorRouter)
app.use('/my_courses', verifyToken, punyarole('admin', 'student'), myCoursesRouter)
app.use('/reviews', verifyToken, punyarole('admin', 'student'), reviewRouter)

module.exports = app;
