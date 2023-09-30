const Film    = require('../data');
const data = require("../data");
const { response } = require('../utils');

module.exports = async (req, res) => {

    const { planet } = req.body;

    const newPlanet = await data.create(planet);
  //  console.log("POST CREATE PLANET");
   // console.log("-- POST PLANET: --", newPlanet);
    response(res, 201, newPlanet);
};