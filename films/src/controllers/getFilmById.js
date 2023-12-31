const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { id } = req.params;

    const film = await data.getById(id);
    //res, statusCode, data
    response(res, 200, film);
};