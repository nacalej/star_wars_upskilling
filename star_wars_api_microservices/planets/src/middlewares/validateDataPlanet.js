const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
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

console.log("Valodate data planet ===========================")
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


    if(!Array.isArray(residents)){
        throw  new ClientError("Residents must be an array with the ID of the resident. For example: ['1', '6'] ", 400);
    }

    if(!Array.isArray(films)){
        throw  new ClientError("Films must be an array with the ID of the film. For example: ['1', '6'] ", 400);
    }

    return next();


}
        

  