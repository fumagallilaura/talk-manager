const getAllTalkers = require('./getAllTalkers');

const getTalkerByEmail = async (email) => {
  const talkers = await getAllTalkers();
  const talker = talkers.find(({ email: e }) => e === email);
  return talker;
};

module.exports = getTalkerByEmail;