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
  talkerExist,
  isQueryEmpty,
} = require('../middlewares');
const {
  getAllTalkers,
  getTalkerById,
  createTalker,
  updateTalker,
  deleteTalker,
  existSearchTerm,
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
    isTokenEmpty, isTokenValid,
    isNameEmpty, isNameValid,
    isAgeEmpty, isAgeValid,
    isTalkEmpty, isWatchedAtEmpty, isRateEmpty, isTalkValid,
    talkerExist, updateTalker)
  .delete('/:id(\\d+)', useTryCatch,
    isTokenEmpty, isTokenValid,
    talkerExist, deleteTalker)
  .get('/search', useTryCatch,
    isTokenEmpty, isTokenValid,
    isQueryEmpty, existSearchTerm);

module.exports = router;
