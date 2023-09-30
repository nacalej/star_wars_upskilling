const axios = require('axios');
const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { id } = req.params;
    //console.log("ID IN DELETECHARACTER CONTROLLER: ", id);
    // const characters = await axios.get("http://database:8004/Character");
    const character = await data.delete(id);
    //console.log("CHARACTERS IN DELETE CHARACTER: ", character);
    //res, statusCode, data
    response(res, 200, character);
};