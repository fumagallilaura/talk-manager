const { invalidTalk } = require('../schemas/talkerValidations');
const isTalkValidService = require('../service/isTalkValid');

const isTalkValid = (req, res, next) => {
  const { talk } = req.body;

  if (isTalkValidService(talk)) return res.status(invalidTalk.error.code).json(invalidTalk.error);

  next();
};

module.exports = isTalkValid;