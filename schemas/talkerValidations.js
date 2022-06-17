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
};

module.exports = errorObjects;