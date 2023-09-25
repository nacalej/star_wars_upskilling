const store        = require('../database');
const { response } = require('../utils');

module.exports = async(req, res) => {
    //recibo por params el modelo y el id
    //al que quiero hacerle la petición
    const { model, _id } = req.params;
   console.log("Inside getRequestById ----", _id);
    ///propiedad del model --> store[model]
    const rspns = await store[model].delete({_id});
    //res, statusCode, data
    response(res, 200, rspns);      
};