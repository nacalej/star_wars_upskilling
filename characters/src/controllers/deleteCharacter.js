const axios = require('axios');
const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { id } = req.params;
    // const characters = await axios.get("http://database:8004/Character");
    const character = await data.delete(id);
    //res, statusCode, data
    response(res, 200, character);
};