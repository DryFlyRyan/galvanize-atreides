var Bookshelf = require('../../database');

require('./device');
require('./keg');


var FlowLog = Bookshelf.Model.extend({
  tableName: 'flow_logs',
  hasTimestamps: true,
  device: function() {
    return this.belongsTo('Device', 'device_id')
  },
  Keg: function() {
    return this.belongsTo('Keg', 'keg_id')
  }
});

module.exports = Bookshelf.model('FlowLog', FlowLog)
