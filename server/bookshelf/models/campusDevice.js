var Bookshelf = require('../../database');

require('./campus');
require('./device');

var CampusDevice = Bookshelf.Model.extend({
  tableName: 'campus_devices',
  campus: function() {
    return this.belongsToMany('Campus', 'campus_id')
  },
  device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  PurchasedKeg: function() {
    return this.hasMany('PurchasedKeg', 'purchased_keg_id')
  }
});

module.exports = Bookshelf.model('CampusDevice', CampusDevice);
