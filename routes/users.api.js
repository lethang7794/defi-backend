const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/authentication');

/**
 * @route POST api/users/
 * @description User can register account
 * @access Public
 */
router.post('/', usersController.createUser);

/**
 * @route GET api/users/
 * @description Admin can get a list of all users
 * @access Admin
 */
router.get('/', usersController.getAllUsers);

/**
 * @route GET api/users/me
 * @description Info of current user
 * @access Login required
 */
router.get('/me', authMiddleware.loginRequired, usersController.getCurrentUser);

/**
 * @route POST api/users/:id
 * @description Admin can get info of an user
 * @access Admin
 */
router.get('/:id', usersController.getOneUser);

/**
 * @route POST api/users/:id
 * @description Admin can update an user
 * @access Admin
 */
router.put('/:id', usersController.updateUser);

/**
 * @route DELETE api/users/
 * @description Admin can delete an user
 * @access Admin
 */
router.delete('/:id', usersController.deleteUser);

module.exports = router;
