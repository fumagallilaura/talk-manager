const isNameValid = (name) => name.length > 3 || typeof name !== 'string';

module.exports = isNameValid;