const { ageIsEmpty } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isAgeEmpty = (req, res, next) => {
  const { age } = req.body;
  
  if (isEmpty(age)) return res.status(ageIsEmpty.error.code).json(ageIsEmpty.error);

  next();
};

module.exports = isAgeEmpty;