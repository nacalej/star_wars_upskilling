const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    getPlanets: catchedAsync(require('./getPlanets')),
    createPlanet: catchedAsync(require('./createPlanet')),
}