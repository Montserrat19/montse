var http = require('http');
var colors = require('colors');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./internals/static-server');

//cargando configuraciones
var config = require('./config/config.js');
var IP = config.IP;
var PORT = config.PORT;

// tema de colors
//colors.setTheme(config.color_theme);

var server = http.createServer(function(req, res){// codigo de nuestro server
//extrayendo el path de la URL
var urlpath = req.url;
//normalizando el path en caso de no se pida ningun recurso
if(urlpath==="/"){
    urlpath = ('/index.html');
}
    //se llama al servidor statico
  staticServer.serve(urlpath,res);
});

server.listen(PORT,IP, function(){
    console.log(`> Server working @http://${IP}:${PORT}/`)
});