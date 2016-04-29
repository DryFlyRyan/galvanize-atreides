var Bookshelf = require('../../database');

require('./purchasedKeg');
require('./kegSize');

var Keg = Bookshelf.Model.extend({
  tableName: 'kegs',
  PurchasedKegs: function() {
    return this.hasMany('PurchasedKeg')
  }
})

module.exports = Bookshelf.model('Keg', Keg)
