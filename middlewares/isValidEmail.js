const { invalidEmail } = require('../schemas/loginValidations.js');

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  
  if (!email.match(/.+@.+\.com?.+/)) return res.status(400).json(invalidEmail.error);

  next();
};

module.exports = isEmailValid;