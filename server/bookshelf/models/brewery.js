var Bookshelf = require('../../database');

require('./beer');

var Brewery = Bookshelf.Model.extend({
  tableName: 'breweries',
  hasTimestamps: true,
  Kegs: function() {
    return this.hasMany('Beer', 'brewery_id')
  }
})

module.exports = Bookshelf.model('Brewery', Brewery)
