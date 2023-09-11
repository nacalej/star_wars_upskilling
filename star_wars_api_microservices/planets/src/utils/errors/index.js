class ClientError extends Error{
    //si no existe statusCode, por default es 400
    constructor(message, statusCode = 400){
        super(message);//llama a error, pasando el mensaje
        this.statusCode = statusCode;
    };
};

module.exports = { ClientError };