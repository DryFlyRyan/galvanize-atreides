// Middleware
require('dotenv').load();
var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var fs = require('fs');

// Routes
var apiConnection = '/api/v1';
var taps = require('./routes/taps/getTaps');
var devices = require('./routes/devices/getDevices');
var campuses = require('./routes/campuses/getCampuses');
var users = require('./routes/users/getUsers');

// Express Server
var app = express();
var server = http.Server(app);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('.'));

//Public Routes
  
app.use(apiConnection + '/taps', taps);
app.use(apiConnection + '/devices', devices);
app.use(apiConnection + '/campuses', campuses);
app.use(apiConnection + '/users', users);

server.listen(port, function(){
  console.log("Server listening on ", port);
});


module.exports = app;
