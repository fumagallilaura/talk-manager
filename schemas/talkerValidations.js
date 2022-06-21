const requiredField = require('../helpers/requiredField');
const httpCodes = require('./httpCodes');

const errorMessages = {
  noTalkerFound: 'Pessoa palestrante não encontrada',
  notFoundToken: 'Token não encontrado',
  invalidToken: 'Token inválido',
  nameIsEmpty: requiredField('name'),
  invalidName: 'O "name" deve ter pelo menos 3 caracteres',
  invalidAge: 'A pessoa palestrante deve ser maior de idade',
  ageIsEmpty: requiredField('age'),
  invalidWatchedAt: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  invalidRate: 'O campo "rate" deve ser um inteiro de 1 à 5',
  talkIsEmpty: requiredField('talk'),
  rateIsEmpty: requiredField('rate'),
  watchedAtIsEmpty: requiredField('watchedAt'),
  talkerNoExist: 'Palestrante não encontrado',
};

const errorObjects = {
  noTalkerFound: {
    error: { code: httpCodes.NOT_FOUND, message: errorMessages.noTalkerFound },
  },
  notFoundToken: {
    error: { code: httpCodes.UNAUTHORIZED, message: errorMessages.notFoundToken },
  },
  invalidToken: {
    error: { code: httpCodes.UNAUTHORIZED, message: errorMessages.invalidToken },
  },
  nameIsEmpty: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.nameIsEmpty },
  },
  invalidName: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidName },
  },
  ageIsEmpty: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.ageIsEmpty },
  },
  invalidAge: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidAge },
  },
  invalidTalk: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidTalk },
  },
  invalidRate: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidRate },
  },
  invalidWatchedAt: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidWatchedAt },
  },
  talkIsEmpty: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.talkIsEmpty },
  },
  rateIsEmpty: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.rateIsEmpty },
  },
  watchedAtIsEmpty: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.watchedAtIsEmpty },
  },
  talkerNoExist: {
    error: { code: httpCodes.NOT_FOUND, message: errorMessages.talkerNoExist },
  },
};

module.exports = errorObjects;