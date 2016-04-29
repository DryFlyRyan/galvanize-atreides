var Bookshelf = require('../../database');

require('./userPermission');
require('./purchasedKeg');

var Campus = Bookshelf.Model.extend({
  tableName: 'campuses',
  Permission: function() {
    return this.hasMany('UserPermission', 'campus_id')
  },
  Device: function() {
    return this.hasMany('Device')
  },
  PurchasedKeg: function() {
    return this.hasMany('PurchasedKeg', 'campus_id')
  }
})

module.exports = Bookshelf.model('Campus', Campus)
