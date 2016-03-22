// This file holds the functions necessary to update the
// database as new users/campuses become available on the
// members portal.

require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var crud = require('./crud.js')

function requestAllUsers() {
  return new Promise(function(resolve, reject){
    console.log("requesting users");
    unirest.get('https://members.galvanize.com/api/v2/users?limit=10000')
    .header({'Accept': 'application/json'})
    .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
      sendImmediately: true
    })
    .end(function(response){
      // console.log(response);
      resolve(response)
    })
  })
}

function filterGalvanizeEmployees(resultsArray) {
  return new Promise(function(resolve,reject){
    console.log("filtering results")
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
    resolve(galvanizeEmployees);
  })
}

function DBSearchForEmployee(employee) {
  return new Promise(function(resolve, reject){
    console.log("searching db");
    crud.users.requestUserByGalvanizeID(employee.id)
  }).then(function(results){
    resolve(results);
  })
}

function addEmployeesToDB(employees) {
  return new Promise(function(resolve, reject){
    console.log("adding employees");
    var employeeArray = []
    employees.forEach(function(element){
      DBSearchForEmployee(element)
      .then(function(employee){
        if (!employee) {
          crud.users.createUser(employee.id)
          .then(function(user){
            employeeArray.push(user)
          })
        }
      })
    })
    resolve(employeeArray);
  })
}

function updateUsers() {
  requestAllUsers()
  .then(function(response){
    // console.log(response);
   filterGalvanizeEmployees(response.body.results)
   .then(function(galvanizeEmployees){
     console.log(galvanizeEmployees);
     return addEmployeesToDB(galvanizeEmployees)
   })
  })
}

function addUser() {
  crud.users.createUser(34566)
  .then(function(user){
    console.log(user);
  })
}

addUser();



module.exports = {
  updateUsers: updateUsers,
  addUser : addUser
}
