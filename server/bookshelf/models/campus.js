var Bookshelf = require('../../database');

require('./userPermission');
require('./purchasedKeg');

var Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  permission: function() {
    return this.hasMany('UserPermission', 'campus_id')
  },
  device: function() {
    return this.hasMany('Device')
  },
  keg: function() {
    return this.hasMany('PurchasedKeg', 'campus_id')
  }
})

module.exports = Bookshelf.model('Campus', Campus)
