// Middleware
console.log("Server Turning On");
require('dotenv').load();
var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var port = process.env.PORT || 3000;
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var later = require('later');



// Routes
var apiConnection = '/api/v1';
var taps = require('./routes/taps/getTaps');
var devices = require('./routes/devices/getDevices');
var campuses = require('./routes/campuses/getCampuses');
var users = require('./routes/users/getUsers');
var beerSearch = require('./routes/beers/beerSearch');

// Modules

var update = require('./update')

// Express Server
var app = express();
var server = http.Server(app);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('.'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Update Functions

// update.updateCampuses();
// update.updateUsers();

//Public Routes

app.use(apiConnection + '/taps', taps);
app.use(apiConnection + '/devices', devices);
app.use(apiConnection + '/campuses', campuses);
app.use(apiConnection + '/users', users);
app.use(apiConnection + '/beersearch', beerSearch);


server.listen(port, function(){
  console.log("Server listening on ", port);
});


module.exports = app;
