const { invalidAge } = require('../schemas/talkerValidations');
const isValidAgeService = require('../service/isValidAge');

const isAgeValid = (req, res, next) => {
  const { age } = req.body;
  
  if (!isValidAgeService(age)) return res.status(invalidAge.error.code).json(invalidAge.error);

  next();
};

module.exports = isAgeValid;