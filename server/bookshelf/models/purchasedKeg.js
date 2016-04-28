var Bookshelf = require('../../database');

require('./keg');
require('./device');
require('./flowLog');
require('./campus');
require('./deviceSchedule');

var PurchasedKeg = Bookshelf.Model.extend({
  tableName: 'purchased_kegs',
  Keg: function() {
    return this.belongsTo('Keg', 'keg_id')
  },
  Device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  FlowLog: function() {
    return this.hasMany('FlowLog')
  }
});

module.exports = Bookshelf.model('PurchasedKeg', PurchasedKeg)
