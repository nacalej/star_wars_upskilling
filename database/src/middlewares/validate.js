const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {

    const { model } = req.params;
    if(model === "Film"){
       // console.log("================ ENTRO A FILM ===========");
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

    if(!Array.isArray(characters) || Object.entries(characters).length === 0 ){
        throw  new ClientError("Characters must be an array with the ID of the character. For example: ['1', '6'] ", 400);
    }
    
    if(!Array.isArray(planets) || Object.entries(planets).length === 0  ){
        throw  new ClientError("Planets must be an array with the ID of the planet. For example: ['1', '6'] ", 400);
    }

    return next();

    }//cierre if Film
    
    if(model === "Planet"){
       // console.log("******================ ENTRO A PLANET ===========");
        const {
            _id,
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            residents,
            films
        } = req.body;
    
        if(   !_id || !name ||
            !rotation_period ||
            !orbital_period ||
            !diameter ||
            !climate ||
            !gravity ||
            !terrain ||
            !surface_water ||
            !residents || !films){
                throw  new ClientError("Cannot send blank data!", 400);
            }

            if(!Number(rotation_period) || !Number(orbital_period) || !Number(diameter)){
                throw  new ClientError("Sorry, rotation_period, orbital_period or diameter must be a valid number.", 400);
            }
    
    
        if(!Array.isArray(residents) || Object.entries(residents).length === 0 ){
            throw  new ClientError("Residents must be an array with the ID of the resident. For example: ['1', '6'] ", 400);
        }
    
        if(!Array.isArray(films) || Object.entries(films).length === 0){
            throw  new ClientError("Films must be an array with the ID of the film. For example: ['1', '6'] ", 400);
        }
    
        return next();
    
    }//cierre if planet

    if(model === "Character"){
        //console.log("******/////////================ ENTRO A CHARACTER ===========");
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
    
    
        if(   !_id || !name ||
            !height  ||
            !mass ||
            !hair_color ||
            !skin_color ||
            !eye_color ||
            !birth_year ||
            !gender ||
            !homeworld){
               
                throw  new ClientError("Cannot send blank data!", 400);
    
            }

            if(!Number(height) || !Number(mass)){
                throw  new ClientError("Sorry, height or mass must be a valid number.", 400);
            }
    
            //hasown devuelve true si tiene la prop
        if(Object.entries(homeworld).length === 0 ){
            throw  new ClientError("Homeworld must NOT be empty! ", 400);
        }
    
        // if(!homeworld.hasOwnProperty('_id') || !homeworld.hasOwnProperty('name')){
        //     throw  new ClientError("Homeworld must be an object. For example: homeworld: {_id: '', name: ''} ", 400);
        // }

        // if(!films.hasOwnProperty('_id') || !films.hasOwnProperty('title')){
        //     throw  new ClientError("Films must be an array of object. For example: films: [{_id: '', title: ''}] ", 400);
        // }
        
        // if(!Array.isArray(films) || typeof films !== "object" || Object.entries(films).length === 0 ){
        //     throw  new ClientError("Films must be an array ust NOT be empty ", 400);
        // }
    
        if(!Array.isArray(films)){
            throw  new ClientError("Films must be an array! ", 400);
        }
    
        for(const film of films) {
            if (typeof film !== "object" || !film._id ) {
                throw  new ClientError("Films must be an array of object. For example: films: [{'_id': ''}] ", 400);
            }
        }
    
        return next();
    }

    
  }