var express = require('express');
var router = express.Router();

const authRouter = require('./auth.api');

const usersRouter = require('./users.api');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Defi backend');
});

// Authorization Router
router.use('/auth', authRouter);

// Users Router
router.use('/users', usersRouter);

/* Catch all unmatched routes */
router.use(function (req, res, next) {
  const err = new Error('404 - Resource not found');
  next(err);
});

module.exports = router;
