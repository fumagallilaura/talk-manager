const existSearchTerm = async (searchTerm, talkers) => (
  talkers.filter(({ name }) => name.includes(searchTerm))
);

module.exports = existSearchTerm;