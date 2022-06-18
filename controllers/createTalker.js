const createTalkers = require('../repository/createTalkers');
const getAllTalkers = require('../repository/getAllTalkers');
const { CREATED } = require('../schemas/httpCodes');

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;

  const talkers = await getAllTalkers();
  const talker = { name, age, id: (talkers.length + 1), talk };

  talkers.push(talker);
  await createTalkers(talkers);

  return res.status(CREATED).json(talker);
};

module.exports = createTalker;