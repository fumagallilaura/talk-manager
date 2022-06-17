const fs = require('fs/promises');

async function getAllTalkers() {
    const data = await fs.readFile('./talker.json', 'utf8');
    const talkers = JSON.parse(data);
    return talkers;
}

module.exports = getAllTalkers;