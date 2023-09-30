const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
    const { id } = req.params;
  //  console.log("ID IN DELETEPLANET CONTROLLER: ", id);
    // const characters = await axios.get("http://database:8004/Character");
    const planet = await data.delete(id);
   // console.log("PLANET IN DELETE PLANET: ", planet);
    //res, statusCode, data
    response(res, 200, planet);
};