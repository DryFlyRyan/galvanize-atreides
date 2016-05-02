var Bookshelf = require('../../database');

require('./device');
require('./purchasedKeg');


var FlowLog = Bookshelf.Model.extend({
  tableName: 'flow_logs',
  hasTimestamps: true,
  device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  keg: function() {
    return this.belongsTo('PurchasedKeg', 'purchased_keg_id')
  }
});

module.exports = Bookshelf.model('FlowLog', FlowLog)
