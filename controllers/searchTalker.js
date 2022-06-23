const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');

const searchTalker = (req, res) => {
  const { q } = req.query;
  const talkers = getAllTalkers();
  const talker = talkers.filter(({ name }) => name.includes(q));

  return res.status(OK).json(talker);
};

module.exports = searchTalker;