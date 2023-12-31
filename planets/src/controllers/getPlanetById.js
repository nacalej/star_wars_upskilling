const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { id } = req.params;

    const planet = await data.getById(id);
    //res, statusCode, data
    response(res, 200, planet);
};