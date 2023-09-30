const Film    = require('../data');
const data = require("../data");
const { response } = require('../utils');

module.exports = async (req, res) => {

    const { film } = req.body;

    const newFilm = await data.create(film);
    response(res, 201, newFilm);
};