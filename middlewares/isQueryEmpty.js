const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');
const isEmpty = require('../service/isEmpty');

const isQueryEmpty = async (req, res, next) => {
  const { q } = req.query;

  const talkers = await getAllTalkers();
  if (isEmpty(q)) return res.status(OK).json(talkers);

  next();
};

module.exports = isQueryEmpty;