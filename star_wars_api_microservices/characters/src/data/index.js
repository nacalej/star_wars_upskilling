const characters = require('./characters.json');

module.exports = {
    // function que retorna los characters
    list: async () => {
        return characters;
    },

    create: async () => {
        throw Error("Existe un error al crear el personaje")
    }
}