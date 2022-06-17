const isFieldEmpty = require('./isFieldEmpty');
const isValidEmail = require('./isEmailValid');
const isValidPassword = require('./isPasswordValid');
const isTalkerEmpty = require('./isTalkerEmpty');
const getTalkerById = require('./getTalkerById');
const getAllTalkers = require('./getAllTalkers');
const isValidToken = require('./isTokenValid');

module.exports = {
  isFieldEmpty,
  isValidEmail,
  isValidPassword,
  isTalkerEmpty,
  getTalkerById,
  getAllTalkers,
  isValidToken,
};