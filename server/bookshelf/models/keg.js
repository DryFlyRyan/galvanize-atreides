var Bookshelf = require('../../database');

require('./purchasedKeg');
require('./kegSize');

var Keg = Bookshelf.Model.extend({
  tableName: 'kegs',
  PurchasedKegs: function() {
    return this.hasMany('PurchasedKeg')
  },
  Size: function() {
    return this.belongsTo('KegSize', 'size_id')
  }
})

module.exports = Bookshelf.model('Keg', Keg)
