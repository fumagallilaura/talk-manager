const { OK } = require('../schemas/httpCodes');
const generateToken = require('../service/generateToken');

const login = async (_, res) => {
  const token = generateToken();
  // const { email, password } = req.body;

  // const validation = await loginService(email, password);
  // if (!validation) return res.status(UNAUTHORIZED).json(unauthorized.error);
  return res.status(OK).json(token);
};

module.exports = login;