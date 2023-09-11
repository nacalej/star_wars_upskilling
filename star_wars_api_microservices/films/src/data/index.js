const films = require('./films.json');

module.exports = {
    // function que retorna los characters
    list: async () => {
        return films;
    },

    create: async () => {
        throw Error("Existe un error al crear el film")
    }
}