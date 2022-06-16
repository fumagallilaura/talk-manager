const { getAll } = require('../model/talkers.models.js');
const rescue = require('../helpers/rescue.js');
const { OK } = require('../schemas/httpCodes.js');
const { noTalkerFound } = require('../schemas/talkerValidations.js');

const getAllTalkers = rescue(async (_, res) => {
  const talker = await getAll();
  res.status(OK).json(talker);
});

const getTalkerById = rescue(async (req, res) => {
  const { id } = req.params;
  const talkers = await getAll();
  const talkerById = talkers.find((talker) => talker.id === Number(id));
  if (!talkerById) {
      return res.status(noTalkerFound.error.code).json(noTalkerFound.error);
  }
  res.status(OK).json(talkerById);
});

module.exports = {
  getAllTalkers,
  getTalkerById,
};
