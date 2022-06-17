const getAllTalkersModel = require('../repository/getAllTalkers.js');
const { OK } = require('../schemas/httpCodes.js');

const getAllTalkers = async (_, res) => {
  const talker = await getAllTalkersModel();
  res.status(OK).json(talker);
};

module.exports = getAllTalkers;
