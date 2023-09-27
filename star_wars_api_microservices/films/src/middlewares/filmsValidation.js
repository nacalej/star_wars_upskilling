const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    //evaluar que no contengan datos inválidos
    const { 
        _id,
        title,
        opening_crawl,
        director,
        producer,
        release_date,
        characters,
        planets
    } = req.body;

    if(!_id || !title  ||
        !opening_crawl ||
        !director ||
        !producer ||
        !release_date ||
        !characters ||
        !planets){
           
            throw  new ClientError("Cannot send blank data!", 400);

        }

    if(!Array.isArray(characters)){
        throw  new ClientError("Characters must be an array with the ID of the character. For example: ['1', '6'] ", 400);
    }

    
    if(!Array.isArray(planets)){
        throw  new ClientError("Planets must be an array with the ID of the planet. For example: ['1', '6'] ", 400);
    }

    return next();
};