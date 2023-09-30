const Film    = require('../data');
const data = require("../data");
const { response } = require('../utils');

module.exports = async (req, res) => {

    const { film } = req.body;

    const newFilm = await data.create(film);
   // console.log("POST CREATE FILM");
   // console.log("-- POST FILM: --", newFilm);
    response(res, 201, newFilm);
};