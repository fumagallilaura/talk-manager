const getAllTalkersModel = require('../repository/getAllTalkers.js');
const { OK } = require('../schemas/httpCodes.js');
const { noTalkerFound } = require('../schemas/talkerValidations.js');

const getAllTalkers = async (_, res) => {
  const talker = await getAllTalkersModel();
  res.status(OK).json(talker);
};

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkersModel();
  const talkerById = talkers.find((talker) => talker.id === Number(id));
  if (!talkerById) {
      return res.status(noTalkerFound.error.code).json(noTalkerFound.error);
  }
  res.status(OK).json(talkerById);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};
