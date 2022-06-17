const express = require('express');
const useTryCatch = require('../helpers/useTryCatch.js');
const {
  isTalkerEmpty,
  getAllTalkers,
  getTalkerById,
} = require('../middlewares');

const router = express.Router();

router
  .get('/', useTryCatch, getAllTalkers)
  .get('/:id(\\d+)', useTryCatch, isTalkerEmpty, getTalkerById);

module.exports = router;
