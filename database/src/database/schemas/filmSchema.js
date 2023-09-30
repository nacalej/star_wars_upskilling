const { Schema } = require('mongoose');
const { ClientError } = require("../../utils/errors");
const validator       = require("validator");

const filmSchema = new Schema({
    _id: {
        type: String,
        required: [true, "Id is required!"],
        validate: {
            validator: (value) =>  !isNaN(value), // Valida que sea un num 
            message: "Id must be a valid number.",
        },
    },
    title: {
        type: String,
        required: [true, "Title is required!"],
        trim: true,
        validate: {
            validator: (value) =>validator.isLength(value, {min: 2, max: 100}),
            message: "Length of the name should be between 2-100."
        }
    },
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: {
        type: String,
        default: Date.now
    },
    characters: [{type: String, ref: "Character"}],
    planets: [{type: String, ref: "Planet"}]
});

//static methods:

//--- Begin of list method --
filmSchema.statics.list = async function () {
    //hacer ref al modelo con el que trabajo:
    const findAllFilms = await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);

    if(!findAllFilms){
        throw new ClientError("Sorry, no records.", 404);
    }

    return findAllFilms;
    
};
//--- End of list method --

//--- Begin of getById method --
filmSchema.statics.get = async function (id) {
    
    const findFilmById = await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "title"]);

    //console.log("ID IN GET BY ID: ", id);

    if(!findFilmById){
        throw new ClientError("Sorry, film not found.", 404);
    }
    return findFilmById;

};
//--- End of getById method --

//--- Begin of insert method --
filmSchema.statics.insert = async function (film) {

    //console.log("Film name id: ", film);
    const findFilmById = await this.findById({ _id: film._id });

    if(findFilmById){
       // console.log("Find one encontro por id: ", findFilmById); 
        throw new ClientError("Sorry, film already exists. Duplicate ID.", 409);
    }else {
        return await this.create(film);
    }
};
//--- End of insert  method --

//--- Begin of delete method --
filmSchema.statics.delete = async function (_id) {

    const findFilmById = await this.findByIdAndDelete(_id);
    //console.log("ID IN DELETE: ", _id);

    if(!findFilmById){
        throw new ClientError("Sorry, film not found.", 404);
    }
    return findFilmById;
};
//--- End of delete  method --

//--- Begin of update method --
filmSchema.statics.update = async function (_id, dataToUpdate) {
   // console.log("DATA: ", dataToUpdate);
    const findFilm = await this.findById({_id});
    //console.log("ID IN UPDATE: ", _id);

    if(findFilm){
        const updateFilm = await this.findByIdAndUpdate(_id, dataToUpdate, {new:true, runValidators: true})
        return updateFilm;
    }else{
        throw new ClientError("Sorry, character not found.", 404);
    }
};
//--- End of update  method --

module.exports = filmSchema;