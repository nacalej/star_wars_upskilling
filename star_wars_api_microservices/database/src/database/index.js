//conex a la bd
const mongoose = require('mongoose');
const { MONGO_URI } = require("../config/envs.js");


const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model("Character", require("./schemas/characterSchema.js"));
// const Film      = conn.model("Film", require("./schemas/filmSchema.js"));
// const Planet    = conn.model("Planet", require("./schemas/planetSchema.js"));


//obtener registros con referencias a otros schemas
//con algunos campos relevantes para el proyecto
// Character.find()
// .populate("films", ["_id", "title"])
// .then(res => console.log(res[0]));

//exportar y crear models:

module.exports = {
    Character: conn.model("Character", require("./schemas/characterSchema.js")),
    Film: conn.model("Film", require("./schemas/filmSchema.js")),
    Planet: conn.model("Planet", require("./schemas/planetSchema.js"))
};

