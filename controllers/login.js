const { OK } = require('../schemas/httpCodes');
const generateToken = require('../service/generateToken');

const login = (_, res) => {
  const token = generateToken();
  
  return res.status(OK).json(token);
};

module.exports = login;