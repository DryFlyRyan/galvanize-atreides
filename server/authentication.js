var passport      = require('passport');
var LIStrategy    = require('passport-linkedin-oauth2').Strategy;

var Users = require('./bookshelf/collections/users').collection;
var User = require('./bookshelf/models/user');

function findOrAddUserWithLinkedin(profile, accessToken) {
  console.log('searching for user');
  console.log(accessToken);
  return new Promise(function(resolve, reject){
    new User({'linkedin_profile_id': profile.id})
    .fetch()
    .then(function(foundUser){
      if (!foundUser) {
        // console.log('no user found');
        return createNewUserWithLinkedin(profile,accessToken)
      } else {
        // console.log('user found');
        return updateUserWithLinkedin(foundUser, accessToken)
      }
    })
    .then(function(user){
      resolve(user)
    })
    .catch(function(err){
      reject(err)
    })
  })
}

function createNewUserWithLinkedin(profile, accessToken) {
  console.log('creating new user');
  return new Promise(function(resolve, reject){
    new User()
    .save({
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      linkedin_profile_id: profile.id,
      linkedin_access_token: accessToken,
    })
    .then(function(user){
      resolve(user)
    })
  })
}

function updateUserWithLinkedin(foundUser, accessToken) {
  console.log('updating user ', foundUser);
  return new Promise(function(resolve, reject){
    new User({id: foundUser.id})
    .save({
      linkedin_access_token: accessToken
    }, {patch: true})
    .then(function(user){
      return new User({id: user.id})
              .fetch()
    })
    .then(function(returnedUser){
      console.log(returnedUser);
      resolve(returnedUser)
    })
  })
}

module.exports = {
  passport: passport,
  LIStrategy: LIStrategy,
  findOrAddUserWithLinkedin: findOrAddUserWithLinkedin,
  findGalvanizeUser: function(user) {

  }
}
