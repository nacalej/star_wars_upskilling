const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    //evaluar que no contengan datos inválidos
    const { name } = req.body;
    if(name) return next();
    else throw  new ClientError("Error en el nombre", 401);
};