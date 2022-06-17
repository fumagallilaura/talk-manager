const express = require('express');
const useTryCatch = require('../helpers/useTryCatch.js');
const {
  getAllTalkers,
  getTalkerById,
} = require('../middlewares/talker.js');

const router = express.Router();

router
  .get('/', useTryCatch, getAllTalkers)
  .get('/:id(\\d+)', getTalkerById);

module.exports = router;
