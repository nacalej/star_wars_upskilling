const Planets = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const planets = await Planets.list();
    //res, statusCode, data
    response(res, 200, planets);
};