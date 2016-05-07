var Bookshelf = require('../../database');

require('./keg');
require('./brewery');

var Beer = Bookshelf.Model.extend({
  tableName: 'beers',
  hasTimestamps: true,
  Kegs: function() {
    return this.hasMany('Keg')
  },
  Brewery: function() {
    return this.belongsTo('Brewery', 'brewery_id')
  }
})

module.exports = Bookshelf.model('Beer', Beer)
