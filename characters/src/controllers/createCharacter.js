const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { character } = req.body;

    const newCharacter = await data.create(character);
    //console.log("POST CREATE CHARACTER");
    //console.log("-- POST CHARACTER: --", newCharacter.data);
    response(res, 201, newCharacter);
};