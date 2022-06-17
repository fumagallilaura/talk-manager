const isFieldEmpty = require('./isFieldEmpty');
const isValidEmail = require('./isEmailValid');
const isValidPassword = require('./isPasswordValid');
const isTalkerEmpty = require('./isTalkerEmpty');
const getTalkerById = require('./getTalkerById');
const getAllTalkers = require('./getAllTalkers');
const isTokenEmpty = require('./isTokenEmpty');
const isTokenValid = require('./isTokenValid');
const isNameValid = require('./isNameValid');
const isNameEmpty = require('./isNameEmpty');
const isAgeEmpty = require('./isAgeEmpty');
const isAgeValid = require('./isAgeValid');

module.exports = {
  isFieldEmpty,
  isValidEmail,
  isValidPassword,
  isTalkerEmpty,
  getTalkerById,
  getAllTalkers,
  isTokenValid,
  isTokenEmpty,
  isNameValid,
  isNameEmpty,
  isAgeEmpty,
  isAgeValid,
};