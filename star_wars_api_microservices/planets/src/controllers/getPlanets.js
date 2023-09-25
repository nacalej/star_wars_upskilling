const axios = require("axios");
const { response } = require('../utils');

module.exports = async (req, res) => {
    const planets = await axios.get("http://localhost:8000/database/Planet");
  
    //res, statusCode, data
    response(res, 200, planets.data);
};