var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var PurchasedKegs = require('../../bookshelf/collections/purchasedKegs').collection
var PurchasedKeg = require('../../bookshelf/models/purchasedKeg')
var Kegs = require('../../bookshelf/collections/kegs').collection
var Keg = require('../../bookshelf/models/keg')
var Devices = require('../../bookshelf/collections/devices').collection
var Device = require('../../bookshelf/models/device')



router.get('/', function(req, res){
  new Devices()
    .fetch({withRelated: [
      'Campus',
      'DeviceLookup',
      'PurchasedKeg',
      'PurchasedKeg.Keg',
      'PurchasedKeg.FlowLog',
      'PurchasedKeg.KegSize',
      'Schedule'
    ]})
  .then(function(results){
    res.send(results)
  })
})

router.get('/:deviceID', function(req, res){
  new Device({id: req.params.deviceID})
    .fetch({withRelated: [
      'Campus',
      'DeviceLookup',
      'PurchasedKeg',
      'PurchasedKeg.Keg',
      'PurchasedKeg.FlowLog',
      'PurchasedKeg.KegSize',
      'Schedule'
    ]})
  .then(function(results){
    res.send(results)
  })
})

module.exports = router;
