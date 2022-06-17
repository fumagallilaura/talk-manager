const regexValidation = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/g;

const isWatchedAtValid = (watchedAt) => watchedAt.match(regexValidation);

module.exports = isWatchedAtValid;