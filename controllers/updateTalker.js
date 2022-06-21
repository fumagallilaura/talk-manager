const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');
const getTalkerById = require('../service/getTalkerById');
const createTalkers = require('../repository/createTalkers');

const updateTalker = async (req, res) => {
  const { body: { name, age, talk }, params: { id } } = req;

  const talker = await getTalkerById(id);
  const talkers = await getAllTalkers();
  const talkerIndex = talkers.findIndex(({ id: findId }) => findId === talker.id);

  const updatedTalker = { ...talkers[talkerIndex], name, age, talk };
  talkers[talkerIndex] = updatedTalker;
  await createTalkers(talkers);
  return res.status(OK).json(updatedTalker);
};

module.exports = updateTalker;