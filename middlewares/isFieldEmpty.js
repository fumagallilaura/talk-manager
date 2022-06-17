const requiredField = require('../helpers/requiredField');
const { BAD_REQUEST } = require('../schemas/httpCodes');
const isEmpty = require('../service/isEmpty');

const validateFields = (fields) => (req, res, next) => {
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
    const fieldName = fields[fieldIndex];
    const field = req.body[fieldName];
     if (isEmpty(field)) return res.status(BAD_REQUEST).json(requiredField(fieldName));
   }

   next();
};

module.exports = validateFields;