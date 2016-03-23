// require('dotenv').load();
var knex = require('./db/knex');
var pg = require('pg');

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

var deviceSchedules = function() {
  return knex('device_schedules');
}

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

function createCampus(galvanizeID) {
  return campuses().insert({
    galvanize_campus_id : galvanizeID
  }, 'id')
}

function requestCampuses() {
  return campuses().select().then(function(campuses){
    return campuses;
  })
}

// Device Functions

function requestDevices() {
  return devices().select().then(function(devices){
    return devices;
  })
}

function requestTapByDevices() {
  return campuses().select().innerJoin('campus_devices', 'campuses.id', 'campus_devices.campus_id').innerJoin('devices', 'campus_devices.device_id', 'devices.id').innerJoin('purchased_kegs', 'devices.id', 'purchased_kegs.device_id').innerJoin('kegs', 'purchased_kegs.keg_id', 'kegs.id').innerJoin('keg_size_table', 'kegs.size_id', 'keg_size_table.id').then(function(taps){
    return taps;
  });
}

function getSchedule(element) {
  return deviceSchedules().select().where({
    device_id: element.device_id
  }).then(function(schedule){
    return schedule;
  })
}

// Keg Functions

function getCurrentKegByDeviceID(deviceID) {
  return purchasedKegs().select(
    ''
  ).where({
    device_id: deviceID,
  }).whereNotNull('deactivated_at').then(function(keg){
    return keg;
  })
}

// Flow Log Functions
function getTotalPoursByKegID(element) {
  return purchasedKegs().select().where({
    keg_id: element.keg_id
  }).innerJoin('flow_logs', 'flow_logs.purchased_keg_id', 'purchased_kegs.keg_id').then(function(results){
    return results;
  })
}

function createFlowLog(deviceID, kegID, pulseData) {
  return flowLogs().insert({
    device_id: deviceID,
    purchased_keg_id: kegID,
    pulse_data: pulseData
  })
}


module.exports = {
  taps: {
    requestTapByDevices     : requestTapByDevices
  },
  users: {
  createUser                : createUser,
  requestUsers              : requestUsers,
  requestUserByGalvanizeID  : requestUserByGalvanizeID
  },
  campuses: {
  createCampus              : createCampus,
  requestCampuses           : requestCampuses
  },
  devices: {
  requestDevices            : requestDevices

  },
  kegs: {
    getCurrentKeg           : getCurrentKegByDeviceID,

  },
  schedules: {
    getSchedule             : getSchedule
  },
  flow: {
    getFlowByKeg            : getTotalPoursByKegID,
    createFlowLog           : createFlowLog
  }
}
