var Bookshelf = require('../../database');

require('./purchasedKeg');
require('./kegSize');

var Keg = Bookshelf.Model.extend({
  tableName: 'kegs',
  purchasedKegs: function() {
    return this.hasMany('PurchasedKeg')
  },
  size: function() {
    return this.belongsTo('KegSize', 'size_id')
  }
})

module.exports = Bookshelf.model('Keg', Keg)
