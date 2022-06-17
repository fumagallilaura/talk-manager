const getAllTalkersModel = require('../repository/getAllTalkers.js');

const getTalkerById = async (id) => {
  const talkers = await getAllTalkersModel();
  const talkerById = talkers.find((talker) => talker.id === Number(id));
  return talkerById;
};

module.exports = getTalkerById;