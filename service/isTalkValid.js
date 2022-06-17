const isTalkValid = (talk) => (
  !talk || !talk.watchedAt || talk.rate === undefined || talk.watchedAt === '' || talk.rate === ''
);

module.exports = isTalkValid;
