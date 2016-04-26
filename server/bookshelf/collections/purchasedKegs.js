var Bookshelf = require('../../database');
var PurchasedKeg = require('../models/purchasedKeg')

exports.collection = Bookshelf.Collection.extend({
  model: PurchasedKeg
})
