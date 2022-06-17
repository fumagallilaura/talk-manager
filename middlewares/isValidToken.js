const { invalidToken } = require('../schemas/talkerValidations');

const isValidToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 16) return res.status(invalidToken.error.code).json(invalidToken);

  next();
};

module.exports = isValidToken;