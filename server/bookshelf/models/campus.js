var Bookshelf = require('../../database');

require('./userPermission');
require('./campusDevice');
require('./purchasedKeg');

var Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  permission: function() {
    return this.hasMany('UserPermission', 'campus_id')
  },
  campusDevice: function() {
    return this.hasMany('CampusDevice', 'campus_id')
  },
  device: function() {
    return this.hasMany('Device').through('CampusDevice', 'id', 'device_id')
  },
  keg: function() {
    return this.hasMany('PurchasedKeg', 'campus_id')
  }
})

module.exports = Bookshelf.model('Campus', Campus)
