var Bookshelf = require('../../database');
var Schedule = require('../models/deviceSchedule');

exports.collection = Bookshelf.Collection.extend({
  model: Schedule
});
