var Bookshelf = require('../../database');

require('./flowLog');
require('./deviceLookup');
require('./campus');
require('./deviceSchedule');
require('./purchasedKeg');

var Device = Bookshelf.Model.extend({
  tableName: 'devices',
  hasTimestamps: true,
  Campus: function() {
    return this.belongsTo('Campus', 'campus_id')
  },
  DeviceLookup: function() {
    return this.belongsTo('DeviceLookup', 'model_id')
  },
  Schedule: function() {
    return this.hasMany('DeviceSchedule')
  },
  FlowLog: function() {
    return this.hasMany('FlowLog')
  },
  PurchasedKeg: function() {
    return this.hasOne('PurchasedKeg').query({'where': {active: 'true'}})
  },
})

module.exports = Bookshelf.model('Device', Device)
