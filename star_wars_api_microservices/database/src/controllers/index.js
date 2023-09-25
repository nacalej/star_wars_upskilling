const { catchedAsync } = require('../utils');

module.exports = {
    //manejo de errores con catchedAsync
    getRequest: catchedAsync(require('./getRequest')),
    getRequestById: catchedAsync(require('./getRequestById')),
    createRequest: catchedAsync(require('./createRequest')),
    updateRequest: catchedAsync(require('./updateRequest')),
    deleteRequest: catchedAsync(require('./deleteRequest')),
}