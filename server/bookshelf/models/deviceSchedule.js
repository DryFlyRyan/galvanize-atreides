 var Bookshelf = require('../../database');

require('./device');


var DeviceSchedule = Bookshelf.Model.extend({
  tableName: 'device_schedules',
  hasTimestamps: true,
  Device: function() {
    return this.belongsTo('Device', 'device_id')
  }
});

module.exports = Bookshelf.model('DeviceSchedule', DeviceSchedule)
