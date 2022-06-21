const createTalkers = require('../repository/createTalkers');
const getAllTalkers = require('../repository/getAllTalkers');
const { NO_CONTENT } = require('../schemas/httpCodes');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkers();
  const newTalkers = talkers.filter(({ id: filterId }) => filterId !== Number(id));
  await createTalkers(newTalkers);
  return res.status(NO_CONTENT).end();
};

module.exports = deleteTalker;