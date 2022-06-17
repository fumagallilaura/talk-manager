const { BAD_REQUEST } = require('../schemas/httpCodes');
const { invalidEmail } = require('../schemas/loginValidations');

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  
  if (!email.match(/.+@.+\.com?.+/)) return res.status(BAD_REQUEST).json(invalidEmail.error);

  next();
};

module.exports = isEmailValid;