const axios = require('axios');
const { response } = require('../utils');
const data = require("../data");

module.exports = async (req, res) => {
  
    const films = await axios.list();
    console.log("FILMS IN GETFILMS: ", characters);
    //res, statusCode, data
    response(res, 200, films.data);
};