var query = require('./cron_db_queries/queries.js');
var deviceFunctions = require('../device_controller/device_controller_functions')
var CronJob = require('cron').CronJob;

// CronJob
// This pulls from the DB once per minute during
// open hours in order to control the Pis

new CronJob('* * * * *', function(){

  query.getSchedules()
  .then(function(results){
    // console.log(results.models);
    return deviceFunctions.deviceIO(results.models)
  })
  .then(function(filteredSchedules){
    return deviceFunctions.deviceOpen(filteredSchedules)
  })
  .then(function(openedTaps){
    console.log(openedTaps);
    return deviceFunctions.deviceClose(openedTaps)
  })
}, null, true, 'America/Denver');
