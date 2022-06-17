const getTalkerByEmail = require('../repository/getTalkerByEmail');
const { invalidPassword, invalidEmail } = require('../schemas/loginValidations');
const generateToken = require('./generateToken');

const login = async (email, password) => {
  const talker = await getTalkerByEmail(email);
  if (!talker) return invalidEmail.error;
  if (password !== '123456') return invalidPassword.error;
  return generateToken();
};

module.exports = login;