const axios = require('axios');
const { response } = require('../utils');

module.exports = async (req, res) => {
    // const films = await Films.list();
    //res, statusCode, data
    // response(res, 200, films);
    const films = await axios.get("http://localhost:8000/database/Film");
    //res, statusCode, data
    response(res, 200, films.data);
};