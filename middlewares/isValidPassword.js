const { invalidPassword } = require('../schemas/loginValidations.js');

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;

  const { error } = invalidPassword;
  if (typeof password !== 'string' || password.length < 6) {
    return res.status(error.code).json(error);
  }

  next();
};

module.exports = isPasswordValid;