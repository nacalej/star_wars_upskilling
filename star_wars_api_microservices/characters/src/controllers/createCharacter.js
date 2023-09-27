const { response } = require('../utils');

module.exports = async (req, res) => {
    const { character } = req.body;

    const newCharacter = await axios.post("http://database:8004/Character", character);
    console.log("POST CREATE CHARACTER");
    console.log("-- POST CHARACTER: --", newCharacter.data);
    response(res, 201, newCharacter.data);
};