const getAll = require('../model/getAllTalkers.js');
const rescue = require('../helpers/rescue.js');
const { OK } = require('../schemas/httpCodes.js');

const getAllTalkers = rescue(async (_, res) => {
  const talker = await getAll();
  res.status(OK).json(talker);
});

module.exports = {
  getAllTalkers,
};
