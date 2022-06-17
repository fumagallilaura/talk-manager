const { UNAUTHORIZED } = require('../schemas/httpCodes');
const { unauthorized } = require('../schemas/loginValidations');
const isEmpty = require('../service/isEmpty');

const isTokenEmpty = (req, res, next) => {
  const { authorization } = req.headers;

  if (isEmpty(authorization)) return res(UNAUTHORIZED).json(unauthorized.error);

  next();
};

module.exports = isTokenEmpty;