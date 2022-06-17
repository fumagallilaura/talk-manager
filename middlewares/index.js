const isFieldEmpty = require('./isFieldEmpty');
const isValidEmail = require('./isEmailValid');
const isValidPassword = require('./isPasswordValid');
const isTalkerEmpty = require('./isTalkerEmpty');
const getTalkerById = require('./getTalkerById');
const getAllTalkers = require('./getAllTalkers');
const isTokenEmpty = require('./isTokenEmpty');
const isValidToken = require('./isTokenValid');
const isNameValid = require('./isNameValid');
const isNameEmpty = require('./isNameEmpty');

module.exports = {
  isFieldEmpty,
  isValidEmail,
  isValidPassword,
  isTalkerEmpty,
  getTalkerById,
  getAllTalkers,
  isValidToken,
  isTokenEmpty,
  isNameValid,
  isNameEmpty,
};