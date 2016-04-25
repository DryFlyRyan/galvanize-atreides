var Bookshelf = require('../../database');

require('./keg');
require('./device');
require('./flowLog');

var PurchasedKeg = Bookshelf.Model.extend({
  tableName: 'purchased_kegs',
  keg: function() {
    return this.belongsTo('Keg', 'keg_id')
  },
  device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  flowLog: function() {
    return this.hasMany('FlowLog')
  }
});

module.exports = Bookshelf.model('PurchasedKeg', PurchasedKeg)
