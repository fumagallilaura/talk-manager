const { notFoundToken } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isTokenEmpty = (req, res, next) => {
  const { authorization } = req.headers;

  if (isEmpty(authorization)) return res.status(notFoundToken.error.code).json(notFoundToken.error);

  next();
};

module.exports = isTokenEmpty;