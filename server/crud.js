require('dotenv').load();
var knex = require('./db/knex');
var pg = require('pg');
var config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost/atreides',
  ssl: true
}

/* Table References */

var campuses = function() {
  return knex('campuses');
};

var users = function() {
  return knex('users');
};

var kegs = function() {
  return knex('kegs');
};

var devices = function() {
  return knex('devices');
};

var deviceLookup = function() {
  return knex('device_lookup');
};

var kegSizeTable = function() {
  return knex('keg_size_table');
};

var userRoles = function() {
  return knex('user_roles');
};

var userPermissions = function() {
  return knex('user_permissions');
};

var campusDevices = function() {
  return knex('campus_devices');
};

var purchasedKegs = function() {
  return knex('purchased_kegs');
};

var flowLogs = function() {
  return knex('flow_logs');
};


// User Functions

function createUser(galvanizeID) {
  return users().insert({
    galvanize_user_id : galvanizeID
  }, 'id')
}

function requestUsers() {
  return users().select().then(function(users){
    return users;
  })
}

function requestUserByGalvanizeID(id) {
  return users().select().where('galvanize_user_id', id).then(function(user){
    return user;
  })
}

function deleteUserByGalvanizeID(id){
  return users().where('galvanize_user_id', id).del();
}

// Campus Functions

function createCampuses(galvanizeID) {
  return campuses().insert({
    galvanize_campus_id : galvanizeID
  }, 'id')
}

// Device Functions

// Keg Functions

//


module.exports;
