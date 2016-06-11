
var Schedules = require('../../bookshelf/collections/schedules').collection
var Schedule = require('../../bookshelf/models/deviceSchedule')

module.exports = {
  getSchedules: function() {
    return new Promise(function(resolve, reject){
      new Schedules()
      .fetch({withRelated: [
        'Device',
        'Device.DeviceLookup'
      ]})
      .then(function(results){
        resolve(results)
      })
    })
  },
}
