const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const data = req.body;
    // const characters = await axios.get("http://database:8004/Character");
    const updateCharacter = await axios.put("http://database:8004/Character", data);
    //console.log("CHARACTERS IN GETCHARACTER: ", characters);
    //res, statusCode, data
    response(res, 200, updateCharacter.data);
};