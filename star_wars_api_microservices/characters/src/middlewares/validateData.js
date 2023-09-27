const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const {
        _id,
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
        films
    } = req.body;

console.log("VALIDATE DATA: -- height--", height);

    if(   !_id || !name ||
        !height ==="" ||
        !mass ||
        !hair_color ||
        !skin_color ||
        !eye_color ||
        !birth_year ||
        !gender ||
        !homeworld){
           
            throw  new ClientError("Cannot send blank data!", 400);

        }

        //hasown devuelve true si tiene la prop
    if(Object.entries(homeworld).length === 0 ){
        throw  new ClientError("Homeworld must NOT be empty! ", 400);
    }

    if(!homeworld.hasOwnProperty('_id') || !homeworld.hasOwnProperty('name')){
        throw  new ClientError("Homeworld must be an object. For example: homeworld: {_id: '', name: ''} ", 400);
    }

    if(!Array.isArray(films)){
        throw  new ClientError("Films must be an array! ", 400);
    }

    for(const film of films) {
        if (typeof film !== "object" || !film._id || !film.title) {
            throw  new ClientError("Films must be an array of object. For example: films: [{_id: '', title: ''}] ", 400);
        }
    }

    return next();


}
        

  