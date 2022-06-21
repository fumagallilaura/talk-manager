const getAllTalkers = require('../repository/getAllTalkers');
const { talkerNoExist } = require('../schemas/talkerValidations');
const getTalkerById = require('../service/getTalkerById');
const isEmpty = require('../service/isEmpty');

const existTalker = async (req, res, next) => {
  const { id } = req.params;
  const talker = await getTalkerById(id);
  const talkers = await getAllTalkers();
  const talkerIndex = talkers.findIndex(({ id: findId }) => findId === talker.id);

  if (isEmpty(talker) || talkerIndex === -1) {
    return res.status(talkerNoExist.error.code).json(talkerNoExist.error);
  }
  
  next();
};

module.exports = existTalker;