var Bookshelf = require('../../database');

require('./userPermission');
require('./device');

var Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  hasTimestamps: true,
  Permission: function() {
    return this.hasMany('UserPermission', 'campus_id')
  },
  Device: function() {
    return this.hasMany('Device')
  }
})

module.exports = Bookshelf.model('Campus', Campus)
