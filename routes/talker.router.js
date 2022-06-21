const express = require('express');
const useTryCatch = require('../helpers/useTryCatch');
const {
  isTalkerEmpty,
  isTokenValid,
  isTokenEmpty,
  isNameValid,
  isNameEmpty,
  isAgeEmpty,
  isAgeValid,
  isTalkValid,
  isTalkEmpty,
  isRateEmpty,
  isWatchedAtEmpty,
} = require('../middlewares');
const {
  getAllTalkers,
  getTalkerById,
  createTalker,
  updateTalker,
} = require('../controllers');

const router = express.Router();

router
  .get('/', useTryCatch, getAllTalkers)
  .get('/:id(\\d+)', useTryCatch, isTalkerEmpty, getTalkerById)
  .post('/', useTryCatch,
    isTokenEmpty, isTokenValid,
    isNameEmpty, isNameValid,
    isAgeEmpty, isAgeValid,
    isTalkEmpty, isRateEmpty, isWatchedAtEmpty, isTalkValid,
    createTalker)
  .put('/:id(\\d+)', useTryCatch,
    isTokenEmpty, isTalkValid,
    isNameEmpty, isNameValid,
    isAgeEmpty, isAgeValid,
    isTalkEmpty, isWatchedAtEmpty, isRateEmpty, isTalkValid,
    updateTalker);

module.exports = router;
