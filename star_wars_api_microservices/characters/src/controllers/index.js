const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    getCharacters: catchedAsync(require('./getCharacters')),
    createCharacter: catchedAsync(require('./createCharacter')),
}