const axios = require('axios');
const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
  
    const planets = await data.list();
    //console.log("PLANETS IN GETPLANETS: ", planets);
    //res, statusCode, data
    response(res, 200, planet);
};