const getAllTalkersModel = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');

const getAllTalkers = async (_, res) => {
  const talker = await getAllTalkersModel();
  res.status(OK).json(talker);
};

module.exports = getAllTalkers;
