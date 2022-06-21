const getAllTalkers = require('../repository/getAllTalkers');
const { OK } = require('../schemas/httpCodes');
const getTalkerById = require('../service/getTalkerById');
const createTalkers = require('../repository/createTalkers');
const isEmpty = require('../service/isEmpty');
const updateTalkerService = require('../service/updateTalker');

const updateTalker = async (req, res) => {
  const { body: { name, age, talk }, params: { id } } = req;
  
  const talker = await getTalkerById(id);
  if (isEmpty(talker)) return res.status(404).json({ message: 'Palestrante não encontrado' });

  const talkers = await getAllTalkers();

  const talkerIndex = talkers.indexOf(talker);
  console.log('talker index ', talkerIndex);
  const updatedTalker = { ...talkers[talkerIndex], name, age, talk };
  talkers[talkerIndex] = updatedTalker;
  console.log('talkers ', talkers);
  await createTalkers(talkers);
  return res.status(OK).json([updatedTalker]);
};

module.exports = updateTalker;