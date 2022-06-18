const { OK } = require('../schemas/httpCodes');
const getTalkerByIdService = require('../service/getTalkerById');

const getTalkerById = async (req, res) => {
  const { id } = req.params;

  const talkerById = await getTalkerByIdService(id);
  return res.status(OK).json(talkerById);
};

module.exports = getTalkerById;