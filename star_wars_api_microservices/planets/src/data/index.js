const planets = require('./planets.json');

module.exports = {
    // function que retorna los characters
    list: async () => {
        return planets;
    },

    create: async () => {
        throw Error("Existe un error al crear el planet")
    }
}