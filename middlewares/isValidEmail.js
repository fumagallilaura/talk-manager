const { invalidEmail } = require('../schemas/loginValidations.js');

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  
  if (!email.match(/.+@.+\..+/)) return res.status(400).json(invalidEmail);

  next();
};

module.exports = isEmailValid;