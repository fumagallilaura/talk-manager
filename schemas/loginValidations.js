const httpCodes = require('./httpCodes');

const errorMessages = {
  invalidEmail: 'O "email" deve ter o formato "email@email.com"',
  invalidPassword: 'O "password" deve ter pelo menos 6 caracteres',
  unauthorized: '"email" e/ou "password" inválido(s)',
};

const errorObjects = {
  invalidEmail: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidEmail },
  },
  invalidPassword: {
    error: { code: httpCodes.BAD_REQUEST, message: errorMessages.invalidPassword },
  },
  unauthorized: {
    error: { code: httpCodes.UNAUTHORIZED, message: errorMessages.unauthorized },
  },
};

module.exports = errorObjects;