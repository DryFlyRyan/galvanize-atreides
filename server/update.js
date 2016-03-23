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



function getCampuses() {
  return crud.campuses.requestCampuses()
  .then(function(campuses) {
    return campuses;
  })
}

function addCampuses(galvanizeID) {
  return crud.campuses.createCampus(galvanizeID).
  then(function(campusID){
    return campusID;
  })
}

function compareCampuses(element, campuses) {
 for(var i = 0; i < campuses.length; i++) {
   console.log("campus ID ", campuses.id, "element ID ", element.id);
   if (element.id === campuses[i].galvanize_campus_id) {
     console.log("element ID: ", element.id, "DB Galvanize ID", campuses.galvanize_campus_id);
     return false;
   }
 }
 console.log("adding campus");
 addCampuses(element.id)
}

var RequestCampuses = unirest.get('https://members.galvanize.com/api/v1/campuses')

function updateCampuses() {
  var APIResponse;
  RequestCampuses
  .header({'Accept': 'application/json'})
  .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
  })
  .end(function(response){
    // console.log(response.body.results);
    APIResponse = response.body.results;
    getCampuses().then(function(campuses){
      console.log("campuses = ", campuses);
      APIResponse.forEach(function(element){
        console.log("element ", element, "campuses ", campuses);
        compareCampuses(element, campuses)
      })
    })
  })
}

//

function getUsers() {
  return crud.users.requestUsers()
  .then(function(users) {
    return users;
  })
}

function addUsers(galvanizeID) {
  return crud.users.createUser(galvanizeID).
  then(function(userID){
    return userID;
  })
}

function compareUsers(element, users) {
 for(var i = 0; i < users.length; i++) {
   if (element.id === users[i].galvanize_user_id) {
     return false;
   }
 }
 addUsers(element.id)
}

var RequestUsers = unirest.get('https://members.galvanize.com/api/v1/users?limit=10000')

function filterGalvanizeEmployees(resultsArray) {
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
  // console.log(galvanizeEmployees);
  return galvanizeEmployees;
}

function updateUsers() {
  var APIResponse;
  RequestUsers
  .header({'Accept': 'application/json'})
  .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
  })
  .end(function(response){
    var filteredUsers = filterGalvanizeEmployees(response.body.results);
    getUsers().then(function(users){
      filteredUsers.forEach(function(element){
        compareUsers(element, users)
      })
    })
    console.log("Done Updating Users");
  })
}




module.exports = {
  updateUsers     : updateUsers,
  updateCampuses  : updateCampuses,
  updateUsers     : updateUsers
}
