const { getAll, create, getOne, remove, update, verifyEmail, login, getLoggerUser, resetPassword, updatePassword } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT,getAll)
    .post(create);
userRouter.route('/verify/:code')
    .get(verifyEmail);
userRouter.route('/login')
    .post(login);
userRouter.route('/me')
    .get(verifyJWT, getLoggerUser);
userRouter.route('/reset_password')
    .post(verifyJWT, resetPassword);
userRouter.route('/reset_password/:code')
    .post(verifyJWT, updatePassword )
userRouter.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = userRouter;