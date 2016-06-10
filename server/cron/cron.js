var query = require('./cron_db_queries/queries.js');
var deviceFunctions = require('../device_controller/device_controller_functions')
var CronJob = require('cron').CronJob;

// CronJob
// This pulls from the DB once per minute during
// open hours in order to control the Pis

new CronJob('* * * * * *', function(){
  var date   = new Date();
  var day    = date.getDay();
  var hour   = date.getHours();
  var minute = date.getMinutes();

  query.getSchedules()
  .then(function(results){
    console.log(results);
  });
}, null, true, 'America/Denver');
