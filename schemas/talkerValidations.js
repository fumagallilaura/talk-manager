const httpCodes = require('./httpCodes');

const errorMessages = {
  noTalkerFound: 'Pessoa palestrante não encontrada',
  notFoundToken: 'Token não encontrado',
  invalidToken: 'Token inválido',
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
};

module.exports = errorObjects;