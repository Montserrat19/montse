var http = require('http');
var colors = require('colors');
var fs = require('fs');
var mime = require('mime');

//cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;

// tema de colors
//colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res){// codigo de nuestro server
//extrayendo el path de la URL
var path = req.url;
//normalizando el path
if(path==="/"){
    path ="./static/index.html";
}else{
    path ='./static'+path;
}
console.log(`>Recurso Solicitado: ${path}`);
//Decidiendo el content.Type en funcion de la extencion del archivo solicitado
var ext = path;
var resp = ext.split(".");


switch(ext[2]){
    case'html':
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    breack;
    case'js':
    res.writeHead(200,{
        'Content-Type':'text/javascript'
    });
breack;
case'css':
res.writeHead(200,{
    'Content-Type':'text/css'
});
breack;
default:
break;
}
fs.readFile(path,'utf8', 
function(err, Content){
    if(err){
    console.log(`> Error al leer archivo: ${err}`);
    res.writeHead(500,{
        'Content-Type':'text/plain'
    });
    res.end("Error 500: Iternal Error...");
}else{
    //TODO: si sirve el archivo
    console.log(">Se sirve el archivo: ./static/index.html");
res.end(Content);
}

});
    
});

server.listen(PORT,IP, function(){
    console.log(`> Server working @http://${IP}:${PORT}/`)
});