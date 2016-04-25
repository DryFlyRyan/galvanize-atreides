var Bookshelf = require('../../database');

require('./flowLog');
require('./campusDevice');
require('./deviceLookup');
require('./campus');
require('./deviceSchedule');
require('./purchasedKeg');

var Device = Bookshelf.Model.extend({
  tableName: 'devices',
  Campus: function() {
    return this.belongsToMany('Campus').through('CampusDevice', 'id', 'campus_id')
  },
  CampusDevice: function() {
    return this.hasMany('CampusDevice')
  },
  DeviceLookup: function() {
    return this.belongsTo('DeviceLookup', 'model_id')
  },
  DeviceSchedule: function() {
    return this.hasMany('DeviceSchedule')
  },
  FlowLog: function() {
    return this.hasMany('FlowLog')
  },
  PurchasedKeg: function() {
    return this.hasMany('PurchasedKeg').through('FlowLog')
  }
})

module.exports = Bookshelf.model('Device', Device)
