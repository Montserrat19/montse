var fs = require('fs'), mime = require('mime'), path = require('path'), config = require('../config/config');

exports.serve = function (url, res) {
var urlpath = path.resolve(config.STATIC_PATH + url);

    console.log(`>Recurso Solicitado: ${urlpath}`.data);

// verifica si existe la ruta estatica
    fs.exists(urlpath, function(exists){
        if(!exists){
            //no existe la ruta
            res.writeHead(404, {
                'Content-Type':'text/html'
            });
            res.end('<h1>404 Not found</h1>');
        }else{
            //existe
     
    //Decidiendo el content.Type en funcion de la extencion del archivo solicitado

    var mimeType = mime.lookup(urlpath);
    console.log(`>mime detectado: ${mimeType}`);

    fs.readFile(urlpath,
        function (err, Content) {
            if (err) {
                console.log(`> Error al leer archivo: ${err}`);
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end("Error 500: Iternal Error...");
            } else {
                //TODO: si sirve el archivo
                res.writeHead(200, {
                    'Content-Type': mimeType
                });
                console.log(`>Se sirve el archivo: ${urlpath}`.info);
                res.end(Content);
            }
 
    });
        }
        });
  
};
