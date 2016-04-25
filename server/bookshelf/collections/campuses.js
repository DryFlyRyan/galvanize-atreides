var Bookshelf = require('../../database');
var Campus = require('../models/campus')

exports.collection = Bookshelf.Collection.extend({
  model: Campus
})
