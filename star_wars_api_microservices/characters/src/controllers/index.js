const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    createCharacter:  catchedAsync(require('./createCharacter')),
    getCharacters:    catchedAsync(require('./getCharacters')),
    getCharacterById: catchedAsync(require("./getCharacterById")),
    deleteCharacter:  catchedAsync(require("./deleteCharacter")),
    updateCharacter:  catchedAsync(require("./updateCharacter"))
}