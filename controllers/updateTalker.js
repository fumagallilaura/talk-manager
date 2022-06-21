const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');
const getTalkerById = require('../service/getTalkerById');
const createTalker = require('./createTalker');

const updateTalker = async (req, res) => {
  const { body: { name, age, talk }, params: { id } } = req;

  const talker = await getTalkerById(id);
  if (!talker) return res.status(404).json({ message: 'Palestrante não encontrado' });
  const talkers = await getAllTalkers();

  const talkerIndex = talkers.indexOf(talker);
  const updatedTalker = { ...talkers[talkerIndex], name, age, talk };
  talkers[talkerIndex] = updatedTalker;

  await createTalker(talkers);
  return res.status(OK).json(updatedTalker);
};

module.exports = updateTalker;