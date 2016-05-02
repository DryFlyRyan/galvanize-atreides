var Bookshelf = require('../../database');

require('./purchasedKeg');
require('./kegSize');

var Keg = Bookshelf.Model.extend({
  tableName: 'kegs',
  hasTimestamps: true,
  PurchasedKegs: function() {
    return this.hasMany('PurchasedKeg')
  }
})

module.exports = Bookshelf.model('Keg', Keg)
