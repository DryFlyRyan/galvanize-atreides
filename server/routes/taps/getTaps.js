var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var Devices = require('../../bookshelf/collections/devices').collection
var Device = require('../../bookshelf/models/device')



router.get('/', function(req, res){
  new Devices()
    .fetch({withRelated: [
      'Campus',
      'DeviceLookup',
      'Keg',
      'Keg.Beer',
      'Keg.Beer.Brewery',
      'Keg.FlowLog',
      'Keg.KegSize',
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
      'Keg',
      'Keg.Beer',
      'Keg.Beer.Brewery',
      'Keg.FlowLog',
      'Keg.KegSize',
      'Schedule'
    ]})
  .then(function(results){
    res.send(results)
  })
})

module.exports = router;
