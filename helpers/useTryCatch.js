const { INTERNAL_SERVER_ERROR } = require('../schemas/httpCodes');

const useTryCatch = (_req, res, next) => {
  try {
    next();
  } catch (error) {
    // next({ statusCode: 500, error });
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
};

module.exports = useTryCatch;