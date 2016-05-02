var Bookshelf = require('../../database');

require('./keg');
require('./device');
require('./flowLog');

var PurchasedKeg = Bookshelf.Model.extend({
  tableName: 'purchased_kegs',
  hasTimestamps: true,
  Keg: function() {
    return this.belongsTo('Keg', 'keg_id')
  },
  Device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  FlowLog: function() {
    return this.hasMany('FlowLog')
  },
  KegSize: function() {
    return this.belongsTo('KegSize', 'size_id')
  }
});

module.exports = Bookshelf.model('PurchasedKeg', PurchasedKeg)
