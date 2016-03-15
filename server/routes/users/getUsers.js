require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var RequestUsers = unirest.get('https://members.galvanize.com/api/v2/users?limit=400')

var RequestMe = unirest.get('https://members.galvanize.com/api/v2/me')

router.get('/', function(req, res){
  RequestUsers
    .header({'Accept': 'application/json'})
    .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
           })
    .end(function(response){
      console.log(response);
    var filteredResults = filterGalvanizeEmployeesFromUsers(response.body.results)
    res.send(filteredResults)
  })
})

function filterGalvanizeEmployeesFromUsers(resultsArray) {
  var galvanizeEmployees = [];
  resultsArray.forEach(function(user){
    user.companies.forEach(function(company){
      console.log(company.id, user.is_active);
      if (company.id === 1 && user.is_active === true) {
        console.log(user);
        galvanizeEmployees.push(user)
      }
    })
  })
  console.log(galvanizeEmployees);
  return galvanizeEmployees;
}

router.get('/me', function(req,res){
  RequestMe
    .header({'Accept': 'application/json'})
    .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
           })
    .end(function(response){
    res.send(response.body.results)
  })
})

router.get('/:userID', function(req,res){
  var userID = parseInt(req.params.userID)
  users.forEach(function(element) {
    console.log(typeof element.id);
    if (element.id === userID) {
      res.send(element);
    } else {
      res.send("No user found with that ID")
    }
  })
})

module.exports = router;
