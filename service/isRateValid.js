const isRateValid = (rate) => !Number.isInteger(rate) || rate < 1 || rate > 5;

module.exports = isRateValid;