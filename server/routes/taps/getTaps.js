var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var Kegs = require('../../bookshelf/collections/purchasedKegs').collection
var Keg = require('../../bookshelf/models/purchasedKeg')

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
      // 'PurchasedKeg.Keg.Size',
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
      'PurchasedKeg.Keg.Size',
      'Schedule',
    ]})
  .then(function(results){
    res.send(results)
  })
})

// router.get('/:tapID', function(req,res) {
//   taps.forEach(function(element){
//     if (element.id === parseInt(req.params.tapID)) {
//       console.log(element);
//       res.send(element);
//     }
//   })
// })

module.exports = router;
