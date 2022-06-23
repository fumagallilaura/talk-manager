const getAllTalkers = require('./getAllTalkers');
const createTalker = require('./createTalker');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const updateTalker = require('./updateTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');
const existSearchTerm = require('./existSearchTerm');

module.exports = {
  getAllTalkers,
  createTalker,
  getTalkerById,
  login,
  updateTalker,
  deleteTalker,
  searchTalker,
  existSearchTerm,
};