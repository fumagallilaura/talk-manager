const { nameIsEmpty } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isNameEmpty = (req, res, next) => {
  const { name } = req.body;

  if (isEmpty(name)) return res.status(nameIsEmpty.error.code).json(nameIsEmpty.error);

  next();
};

module.exports = isNameEmpty;