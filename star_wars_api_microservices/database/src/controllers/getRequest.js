const store        = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
    //recibo por params el modelo 
    //al que quiero hacerle la petición
    const { model } = req.params;
    //console.log("Inside getRequest ----");
    ///propiedad del model --> store[model]
    const rspns = await store[model].list();
    //res, statusCode, data
    response(res, 200, rspns);
};