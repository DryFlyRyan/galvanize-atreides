require('dotenv').load();

var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var fs = require('fs');

// Routes
var apiConnection = '/api/v1'
var devices = require('./routes/devices/getDevices')


var app = express();
var server = http.Server(app);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('.'));

//Public Routes

app.use(apiConnection + '/get-devices', devices);

server.listen(port, function(){
  console.log("Server listening on ", port);
});

// app.get('/dashboard/home', function(req, res) {
//   res.sendfile(__dirname + '/index.html')
// })

module.exports = app;
