var Bookshelf = require('../../database');

require('./keg');
require('./device');
require('./flowLog');
require('./kegSize');
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
  Campus: function() {
    return this.belongsTo('Campus', 'campus_id').through('Device', 'device_id')
  },
  FlowLog: function() {
    return this.hasMany('FlowLog')
  },
  Schedule: function() {
    return this.belongsTo('Device', 'device_id')
  }
});

module.exports = Bookshelf.model('PurchasedKeg', PurchasedKeg)
