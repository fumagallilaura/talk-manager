const { talkIsEmpty } = require('../schemas/talkerValidations');
const isEmpty = require('../service/isEmpty');

const isTalkEmpty = (req, res, next) => {
  const { talk } = req.body;

  if (isEmpty(talk)) return res.status(talkIsEmpty.error.code).json(talkIsEmpty.error.message);

  next();
};

module.exports = isTalkEmpty;