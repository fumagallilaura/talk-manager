const express = require('express');
const {
  getAllTalkers,
} = require('./middlewares/talker.js');

const router = express.Router();

router
  .get('/', getAllTalkers);

module.exports = router;
