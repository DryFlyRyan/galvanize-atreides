var Bookshelf = require('../../database');
var Brewery = require('../models/brewery')

exports.collection = Bookshelf.Collection.extend({
  model: Brewery
})
