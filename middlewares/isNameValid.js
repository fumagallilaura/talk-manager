const { invalidName } = require('../schemas/talkerValidations');
const isNameValidService = require('../service/isNameValid');

const isNameValid = (req, res, next) => {
  const { name } = req.body;

  if (!isNameValidService(name)) return res.status(invalidName.error.code).json(invalidName.error);

  next();
};

module.exports = isNameValid;