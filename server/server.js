// Middleware
require('dotenv').load();
var express       = require('express');
var http          = require('http');
var favicon       = require('serve-favicon');
var port          = process.env.PORT || 3000;
var fs            = require('fs');
var cors          = require('cors');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var later         = require('later');

// Auth Middleware
var passport      = require('passport');
var session       = require('express-session')
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_ID,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: "http://localhost:3000/api/v1/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
  state: true
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));

// Routes
var apiConnection = '/api/v1';
var linkedinAuth  = require('./routes/auth/linkedin');
var taps          = require('./routes/taps/getTaps');
var devices       = require('./routes/devices/getDevices');
var campuses      = require('./routes/campuses/getCampuses');
var users         = require('./routes/users/getUsers');
var beerSearch    = require('./routes/beers/beers');

// Modules


// Express Server
var app           = express();
var server        = http.Server(app);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('.'));
app.use(session());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Update Functions

// update.updateCampuses();
// update.updateUsers();

//Routes

app.use(apiConnection + '/auth/linkedin', linkedinAuth)
app.use(apiConnection + '/taps', taps);
app.use(apiConnection + '/devices', devices);
app.use(apiConnection + '/campuses', campuses);
app.use(apiConnection + '/users', users);
app.use(apiConnection + '/beers', beerSearch);


server.listen(port, function(){
  console.log("Server listening on ", port);
});


module.exports = app;
