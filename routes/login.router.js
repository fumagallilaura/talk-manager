const express = require('express');
const useTryCatch = require('../helpers/useTryCatch');
const {
  isFieldEmpty,
  isValidEmail,
  isValidPassword,
} = require('../middlewares');
const { login } = require('../controllers');

const router = express.Router();

router
  .post('/', useTryCatch, isFieldEmpty(['email', 'password']),
    isValidEmail, isValidPassword, login);

module.exports = router;
