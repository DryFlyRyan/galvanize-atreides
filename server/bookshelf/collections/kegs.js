var Bookshelf = require('../../database');
var Keg = require('../models/keg')

exports.collection = Bookshelf.Collection.extend({
  model: Keg
})
