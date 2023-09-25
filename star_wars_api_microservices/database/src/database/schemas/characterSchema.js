const { Schema }      = require('mongoose');
const { ClientError } = require("../../utils/errors");
const validator       = require("validator");

const characterSchema = new Schema({
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
    height: {
        type: String,
        validate: {
            validator: (value) => !isNaN(value), 
            message: "Sorry, height must be a valid number.",
        },
    },
    mass: {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "Sorry, mass must be a valid number.",
        },
        default: 'unknown'
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    eye_color: {
        type: String,
        default: 'unknown'
    },
    birth_year: {
        type: String,
        default: 'unknown'
    },
    gender: {
        type: String,
        lowercase: true,
        enum : ["male","female","unknown","n/a"],
        default: "unknown"      
    },
    homeworld: {
        type: String, 
        ref: "Planet"
    },//ref al model planet(id del planet) 
    films: [{
        type: String, 
        ref: "Film"
    }]//ref a films(id del film)
});

//static methods:

//--- Begin of list method --
characterSchema.statics.list = async function () {
    //similar a: characters.find()
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
//--- End of list method --

//--- Begin of getById method --
characterSchema.statics.get = async function (id) {

    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
//--- End of getById method --

//--- Begin of insert method --
characterSchema.statics.insert = async function (character) {
    console.log("Character name id: ", character);
    
    const { _id, name } = character;
    console.log("Character id: ", _id);

    const findCharacterById = await this.findById({ _id });

    if(findCharacterById){
        console.log("Find one encontro por id: ", findCharacterById); 
        throw new ClientError("Sorry, character already exists. Duplicate ID.", 409);
    }else {
        const findByName = await this.findOne({ name });
        console.log("Find one by name: ", findByName); 
    
        if(!findByName){
            console.log("Entro al else");
            return await this.create(character);
        }else{
            throw new ClientError("Sorry, character already exists. Duplicate name.", 409);
        }        
    }         
};
//--- End of insert  method --

//--- Begin of delete method --
characterSchema.statics.delete = async function (_id) {

    const findCharacterById = await this.findByIdAndDelete(_id);
    console.log("ID IN DELETE: ", _id);

    if(!findCharacterById){
        throw new ClientError("Sorry, character not found.", 404);
    }
    return findCharacterById;
};
//--- End of delete  method --

//--- Begin of update method --
characterSchema.statics.update = async function (_id, dataToUpdate) {
    console.log("DATA: ", dataToUpdate);
    const findCharacter = await this.findById({_id});
    console.log("ID IN UPDATE: ", _id);

    if(findCharacter){
        const updateCharacter = await this.findByIdAndUpdate(_id, dataToUpdate, {new:true, runValidators: true})
        return updateCharacter;
    }else{
        throw new ClientError("Sorry, character not found.", 404);
    }
    
};
//--- End of update  method --

module.exports = characterSchema;