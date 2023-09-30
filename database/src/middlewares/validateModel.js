const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { model } = req.params;
    //si el model que se recibe por params
    //está incluido en alguno de los 3
    if(["Character","Film","Planet"].includes(model)){
        return next();
    }else{
        throw  new ClientError("Error, Invalid model", 401);
    }

};