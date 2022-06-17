const { invalidPassword } = require('../schemas/loginValidations');

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(invalidPassword.error.code).json(invalidPassword.error);
  }

  next();
};

module.exports = isPasswordValid;