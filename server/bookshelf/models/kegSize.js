var Bookshelf = require('../../database');

require('./keg');

var KegSize = Bookshelf.Model.extend({
  tableName: 'keg_size_table',
  Keg: function() {
    return this.hasMany('PurchasedKeg')
  }
});

module.exports = Bookshelf.model('KegSize', KegSize)
