const store        = require('../database');
const { response } = require('../utils');

module.exports = async (req, res) => {
    //recibo por params el modelo 
    //al que quiero hacerle la petición
    const { model } = req.params;

    const record = req.body;
    const newRecord = await store[model].insert(record);
    response(res, 200, newRecord);
};