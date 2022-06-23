const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');
const existSearchTermService = require('../service/existSearchTerm');

const existSearchTerm = async (req, res) => {
  const { q } = req.query;

  const talkers = await getAllTalkers();
  const searchTerm = await existSearchTermService(q, talkers);
  return res.status(OK).json(searchTerm);
};

module.exports = existSearchTerm;