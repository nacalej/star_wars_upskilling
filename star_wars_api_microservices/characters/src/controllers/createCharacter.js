const Character    = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { name, id }= req.body;
    console.log("-- POST CHARACTER NAME: --",name);
    // const newCharacter = await axios.post("http://database:8004/Character", character);
    // console.log("-- POST CHARACTER: --", newCharacter.data);
    // response(res, 201, newCharacter.data);
};