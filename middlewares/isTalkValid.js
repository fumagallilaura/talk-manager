const { invalidTalk, invalidRate, invalidWatchedAt } = require('../schemas/talkerValidations');
const isRateValid = require('../service/isRateValid');
const isTalkValidService = require('../service/isTalkValid');
const isWatchedAtValid = require('../service/isWatchedAtValid');

const isTalkValid = (req, res, next) => {
  const { talk } = req.body;
  
  if (isTalkValidService(talk)) return res.status(invalidTalk.error.code).json(invalidTalk.error);
  
  if (!isWatchedAtValid(talk.watchedAt)) {
    return res.status(invalidWatchedAt.error.code).json(invalidWatchedAt.error);
  }
  if (isRateValid(talk.rate)) return res.status(invalidRate.error.code).json(invalidRate.error);

  next();
};

module.exports = isTalkValid;