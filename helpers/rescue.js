const { INTERNAL_SERVER_ERROR } = require('../schemas/httpCodes.js');

const rescue = (middleware) => (req, res, next) => {
  try {
    middleware(req, res, next);
  } catch (error) {
    // next({ statusCode: 500, error });
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
};

module.exports = rescue;