const { noTalkerFound } = require('../schemas/talkerValidations');
const getTalkerById = require('../service/getTalkerById');

const isTalkerEmpty = async (req, res, next) => {
  const { id } = req.params;
  const talkerById = await getTalkerById(id);

  if (!talkerById) {
      return res.status(noTalkerFound.error.code).json(noTalkerFound.error);
  }

  next();
};

module.exports = isTalkerEmpty;