const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    // const characters = await axios.get("http://database:8004/Character");
    const character = await axios.get(`http://database:8004/Character/${id}`);
    console.log("CHARACTER IN GETCHARACTERBYID: ", character);
    //res, statusCode, data
    response(res, 200, character.data);
};