var Bookshelf = require('../../database');
var Device = require('../models/device')

exports.collection = Bookshelf.Collection.extend({
  model: Device
})
