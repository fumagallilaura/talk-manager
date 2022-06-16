const express = require('express');
const {
  getAllTalkers,
  getTalkerById,
} = require('../middlewares/talker.js');

const router = express.Router();

router
  .get('/', getAllTalkers)
  .get('/:id(\\d+)', getTalkerById);

module.exports = router;
