const express = require("express");
const morgan  = require("morgan");
const server  = express();
const errorHandler = require('./handler');

server.use(express.json());
server.use(morgan('dev'));

//server.use('/database', require("./routes"));
server.use(require("./routes"));
//si no encuentra ningun endpoint con la request, lo recibe este controller
server.use('*', (req, res) => {
    res.status(404).send("Not found");
});
//poder sobreescribir el manejador de errores de express
server.use(errorHandler);

module.exports = server;