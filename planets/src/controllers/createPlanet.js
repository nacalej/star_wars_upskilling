const Film    = require('../data');
const data = require("../data");
const { response } = require('../utils');

module.exports = async (req, res) => {

    const { planet } = req.body;

    const newPlanet = await data.create(planet);

    response(res, 201, newPlanet);
};