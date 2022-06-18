const { rateIsEmpty } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isRateEmpty = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (isEmpty(rate)) {
    return res.status(rateIsEmpty.error.code).json(rateIsEmpty.error.message);
  }

  next();
};

module.exports = isRateEmpty;