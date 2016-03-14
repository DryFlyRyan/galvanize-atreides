require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var users = [
  {
    id: 1,
    photoURL: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYFAAAAJDRiNzc2OTA2LWRjMGEtNDA0ZS05MmQ5LTI3MWVmNDgzNDZjMQ.jpg",
    firstName: 'Ryan',
    lastName: 'Douglas',
  }
]

var RequestUsers = unirest.get('https://members.galvanize.com/api/v2/users?limit=10000')

router.get('/', function(req, res){
  RequestUsers
    .header({'Accept': 'application/json'})
    .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
           })
    .end(function(response){
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
