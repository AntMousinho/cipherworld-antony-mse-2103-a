const solveCipher = require('./solveCipher');

const cipher = () => {
    const myArgs = process.argv.slice(2);
    solveCipher(myArgs[0], myArgs[1], myArgs[2], myArgs[3]);
}

module.exports = cipher;