const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    //evaluar que no contengan datos inválidos
    const { name, id} = req.body;

    if(id && name){
        return next();
    }
    else{
        throw  new ClientError("Falta el nombre, o el id. Por favor agrégalo.", 401);
    }
};

