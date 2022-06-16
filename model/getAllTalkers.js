const fs = require('fs/promises');

async function getAll() {
    const data = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(data);
    return talkers;
}

module.exports = getAll;
