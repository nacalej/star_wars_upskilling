const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { updateData }= req.body;
    const { id } = req.params;
    // const characters = await axios.get("http://database:8004/Character");
    const updatePlanet = await data.update(id, updateData);
    console.log("UPDATE IN UPDATE PLANET CONTROLLER: ", updatePlanet);
    //res, statusCode, data
    response(res, 200, updatePlanet);
};