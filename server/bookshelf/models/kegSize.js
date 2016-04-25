var Bookshelf = require('../../database');

require('./keg');

var KegSize = Bookshelf.Model.extend({
  tableName: 'keg_size_table',
  keg: function() {
    return this.hasMany('Keg')
  }
});

module.exports = Bookshelf.model('KegSize', KegSize)
