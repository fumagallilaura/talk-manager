const { invalidEmail } = require('../schemas/loginValidations');

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  
  if (!email.match(/.+@.+\.com?.+/)) {
    return res.status(invalidEmail.error.code).json(invalidEmail.error);
  }

  next();
};

module.exports = isEmailValid;