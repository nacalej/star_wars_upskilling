const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    getPlanets:    catchedAsync(require('./getPlanets')),
    createPlanet:  catchedAsync(require('./createPlanet')),
    getPlanetById: catchedAsync(require('./getPlanetById')),
    deletePlanet:  catchedAsync(require('./deletePlanet')),
    updatePlanet:  catchedAsync(require('./updatePlanet'))
}