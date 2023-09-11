const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    getFilms: catchedAsync(require('./getFilms')),
    createFilm: catchedAsync(require('./createFilm')),
}