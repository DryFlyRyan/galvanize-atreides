var Bookshelf = require('../../database');

require('./device');


var DeviceLookup = Bookshelf.Model.extend({
  tableName: 'device_lookup',
  devices: function() {
    return this.hasMany('Device')
  }
})

module.exports = Bookshelf.model('DeviceLookup', DeviceLookup)
