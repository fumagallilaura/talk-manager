const requiredField = require('../helpers/requiredField');
const isEmpty = require('../service/isEmpty');

const validateFields = (fields) => (req, res, next) => {
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
    const fieldName = fields[fieldIndex];
    const field = req.body[fieldName];
     if (isEmpty(field)) return res.status(400).json(requiredField(fieldName));
   }

   next();
};

module.exports = validateFields;