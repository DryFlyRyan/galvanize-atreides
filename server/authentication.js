var passport      = require('passport');
var LIStrategy    = require('passport-linkedin-oauth2').Strategy;

var Users = require('./bookshelf/collections/users');
var User = require('./bookshelf/models/user');

module.exports = {
  passport: passport,
  LIStrategy: LIStrategy,
  findDBUser: function(profileID) {
    return new Promise(function(resolve, reject){
      new User({'linkedin_profile_id': profileID})
      .fetch()
      .then(function(foundUser){
        resolve(foundUser)
      })
      .catch(function(err){
        reject(err)
      })
    })
  },
  findGalvanizeUser: function(user) {

  }
}
