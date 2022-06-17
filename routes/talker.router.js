const express = require('express');
const useTryCatch = require('../helpers/useTryCatch');
const {
  isTalkerEmpty,
  getAllTalkers,
  getTalkerById,
  isTokenValid,
  isTokenEmpty,
  isNameValid,
  isNameEmpty,
  isAgeEmpty,
  isAgeValid,
} = require('../middlewares');

const router = express.Router();

router
  .get('/', useTryCatch, getAllTalkers)
  .get('/:id(\\d+)', useTryCatch, isTalkerEmpty, getTalkerById)
  .post('/', useTryCatch, isTokenEmpty, isTokenValid, isNameEmpty,
    isNameValid, isAgeEmpty, isAgeValid);

module.exports = router;
