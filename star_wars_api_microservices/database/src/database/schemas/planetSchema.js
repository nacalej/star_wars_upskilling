const { Schema } = require('mongoose');
const { ClientError } = require("../../utils/errors");
const validator       = require("validator");


const planetSchema = new Schema({
    _id: {
        type: String,
        required: [true, "Id is required!"],
        validate: {
            validator: (value) =>  !isNaN(value), // Valida que sea un num 
            message: "Id must be a valid number.",
        },
    },
    name: {
        type: String,
        required: [true, "Name is required!"],
        trim: true,
        validate: {
            validator: (value) =>validator.isLength(value, {min: 2, max: 100}),
            message: "Length of the name should be between 2-100."
        }
    },
    rotation_period: {
        type: String,
        trim: true,
        validate: [{
            validator: function(v) {
                if(v === "" || isNaN(v)){
                    return false;
                }
            },
            message: 'Cannot send blank data and must be a number!'
          }],
    },
    orbital_period: {
        type: String,
        validate: [{
            validator: function(v) {
                if(v === "" || isNaN(v)){
                    return false;
                }
            },
            message: 'Cannot be empty and must be a number!'
          }],
    },
    diameter: {
        type: String,
        default: 'unknown'
    },
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{
        type: String, 
        ref: "Character"
       
    }],
    films: [{
        type: String,
        ref: "Film",      
    }]
 
});


//static methods:

//--- Begin of list method --
planetSchema.statics.list = async function () {
    //hacer ref al modelo con el que trabajo:
    const findAllPlanets = await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);

    if(!findAllPlanets){
        throw new ClientError("Sorry, no records.", 404);
    }

    return findAllPlanets;
    
};
//--- End of list method --

//--- Begin of getById method --
planetSchema.statics.get = async function (id) {
    
    const findPLanetById = await this.findById(id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);

    console.log("ID IN GET BY ID: ", id);

    if(!findPLanetById){
        throw new ClientError("Sorry, planet not found.", 404);
    }
    return findPLanetById;

};
//--- End of getById method --

//--- Begin of insert method --
planetSchema.statics.insert = async function (planet) {
    console.log("Planet name id: ", planet);
    
    const { _id, name } = planet;
    console.log("Planet id: ", _id);

    const findPLanetById = await this.findById({ _id });

    if(findPLanetById){
        console.log("Find one encontro por id: ", findPLanetById); 
        throw new ClientError("Sorry, planet already exists. Duplicate ID.", 409);
    }else {
        const findByName = await this.findOne({ name });
        console.log("Find one by name: ", findByName); 
    
        if(!findByName){
            console.log("Entro al else");
            return await this.create(planet);
        }else{
            throw new ClientError("Sorry, planet already exists. Duplicate name.", 409);
        }        
    }         
};
//--- End of insert  method --

//--- Begin of delete method --
planetSchema.statics.delete = async function (_id) {

    const findPLanetById = await this.findByIdAndDelete(_id);
    console.log("ID IN DELETE: ", _id);

    if(!findPLanetById){
        throw new ClientError("Sorry, planet not found.", 404);
    }
    return findPLanetById;
};
//--- End of delete  method --

//--- Begin of update method --
planetSchema.statics.update = async function (_id, dataToUpdate) {
    
    console.log("DATA: ", dataToUpdate);
    const findPlanet = await this.findById({_id});
    console.log("ID IN UPDATE: ", _id);

    if(findPlanet){
        const updatePlanet = await this.findByIdAndUpdate(_id, dataToUpdate, {new:true, runValidators: true})
        return updatePlanet;
    }else{
        throw new ClientError("Sorry, planet not found.", 404);
    }
};
//--- End of update  method --

module.exports = planetSchema;