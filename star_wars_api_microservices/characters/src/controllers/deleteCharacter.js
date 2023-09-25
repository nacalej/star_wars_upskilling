const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    console.log("ID IN DELETECHARACTER CONTROLLER: ", id);
    // const characters = await axios.get("http://database:8004/Character");
    const character = await axios.delete(`http://database:8004/Character/${id}`);
    //console.log("CHARACTERS IN GETCHARACTER: ", characters);
    //res, statusCode, data
    response(res, 200, character.data);
};