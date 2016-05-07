var Bookshelf = require('../../database');
var Beer = require('../models/beer')

exports.collection = Bookshelf.Collection.extend({
  model: Beer
})
