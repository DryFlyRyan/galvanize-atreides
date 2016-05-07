var Bookshelf = require('../../database');

require('./beer');
require('./device');
require('./flowLog');
require('./kegSize')

var Keg = Bookshelf.Model.extend({
  tableName: 'kegs',
  hasTimestamps: true,
  Beer: function() {
    return this.belongsTo('Beer', 'beer_id')
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

module.exports = Bookshelf.model('Keg', Keg)
