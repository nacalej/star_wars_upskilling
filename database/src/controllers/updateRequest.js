const store        = require('../database');
const { response } = require('../utils');

module.exports = async(req, res) => {
    //recibo por params el modelo y el id
    //al que quiero hacerle la petición
    const { model, id } = req.params;
    ///propiedad del model --> store[model]
    const rspns = await store[model].update(id, req.body);
    //res, statusCode, data
    response(res, 200, rspns);      
};