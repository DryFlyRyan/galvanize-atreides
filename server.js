require('dotenv').load();

var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;


var app = express();
var server = http.Server(app);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('./app'));

server.listen(port, function(){
  console.log("Server listening on ", port);
});

module.exports = app;
