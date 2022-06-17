const express = require('express');
const useTryCatch = require('../helpers/useTryCatch');
const {
  isTalkerEmpty,
  getAllTalkers,
  getTalkerById,
  isValidToken,
  isTokenEmpty,
} = require('../middlewares');

const router = express.Router();

router
  .get('/', useTryCatch, getAllTalkers)
  .get('/:id(\\d+)', useTryCatch, isTalkerEmpty, getTalkerById)
  .post('/', isTokenEmpty, isValidToken);

module.exports = router;
