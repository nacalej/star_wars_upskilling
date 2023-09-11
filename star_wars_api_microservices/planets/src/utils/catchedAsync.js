//function que recibe una function, retorna otra function
//ejecuta la function (con req, y res)que recibe por la primera,
//y ante un error, hace un .catch error y hace next error
module.exports = (fn) => {
    //fn es la function controladora
    return function(req, res, next){
        //retorna una promesa 
        fn(req, res).catch((err) => {
            //si existe el error, salta al manejador de errores de express --next
            next(err);
        });
    };
};