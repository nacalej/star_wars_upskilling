const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
     const characters = await axios.get("http://database:8004/Character");
    //const characters = await axios.get("http://localhost:8000/database/Character");
    console.log("CHARACTERS IN GETCHARACTER: ", characters);
    //res, statusCode, data
    response(res, 200, characters.data);
};