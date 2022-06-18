const { watchedAtIsEmpty } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isWatchedAtEmpty = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (isEmpty(watchedAt)) {
    return res.status(watchedAtIsEmpty.error.code).json(watchedAtIsEmpty.error.message);
  }

  next();
};

module.exports = isWatchedAtEmpty;