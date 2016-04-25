var Bookshelf = require('../../database');
var User = require('../models/user')

exports.collection = Bookshelf.Collection.extend({
  model: User
})
