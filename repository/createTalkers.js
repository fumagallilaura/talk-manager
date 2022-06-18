const fs = require('fs').promises;

const createTalkers = async (talkers) => {
await fs.writeFile('./talker.json', JSON.stringify(talkers, null, 2));

return talkers;
};

module.exports = createTalkers;