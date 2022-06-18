const { invalidRate, invalidWatchedAt } = require('../schemas/talkerValidations');
const isRateValid = require('../service/isRateValid');
const isWatchedAtValid = require('../service/isWatchedAtValid');

const isTalkValid = (req, res, next) => {
  const { talk } = req.body;
  
  if (!isWatchedAtValid(talk.watchedAt)) {
    return res.status(invalidWatchedAt.error.code).json(invalidWatchedAt.error);
  }
  if (isRateValid(talk.rate)) {
    return res.status(invalidRate.error.code).json(invalidRate.error);
  }

  next();
};

module.exports = isTalkValid;