const { Schema } = require('mongoose');

const characterSchema = new Schema({
    _id: String,
    name: String,
    // name: {
    //     type:String,
    //     required:"Es necesario un nombre",
    //     maxlength:[50,"Nombre muy largo, max 50"]
    // },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: [{type: String, lowercase: true}],
    homeworld: {type: String, ref: "Planet"},//ref al planeta donde pertenece
    films: [{type: String, ref: "Film"}]//ref a pelis
});


//static methods:

characterSchema.statics.list = async function () {
    //hacer ref al modelo con el que trabajo:
    return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
    return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
    return await this.create(character);
};

module.exports = characterSchema;