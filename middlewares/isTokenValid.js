const { UNAUTHORIZED } = require('../schemas/httpCodes');
const { invalidToken } = require('../schemas/talkerValidations');

const isValidToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization.length !== 16) return res.status(UNAUTHORIZED).json(invalidToken.error);

  next();
};

module.exports = isValidToken;