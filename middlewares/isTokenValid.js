const { invalidToken } = require('../schemas/talkerValidations');

const isTokenValid = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 16) {
    return res.status(invalidToken.error.code).json(invalidToken.error);
  }

  next();
};

module.exports = isTokenValid;