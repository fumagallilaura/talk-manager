const httpCodes = require('./httpCodes');

const errorMessages = {
  noTalkerFound: 'Pessoa palestrante não encontrada',
};

const errorObjects = {
  noTalkerFound: {
    error: { code: httpCodes.NOT_FOUND, message: errorMessages.noTalkerFound },
  },
};

module.exports = errorObjects;