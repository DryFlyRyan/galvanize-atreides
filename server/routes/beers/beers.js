require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var Beers = require('../../bookshelf/collections/beers').collection
var Beer = require('../../bookshelf/models/beer')
var Kegs = require('../../bookshelf/collections/kegs').collection
var Keg = require('../../bookshelf/models/keg')

function searchBeers(searchParameters){
  return new Promise(function(resolve, reject){
    unirest.get('https://api.untappd.com/v4/search/beer')
    .header({'Accept': 'application/json'})
    .query({
      client_id: process.env.UNTAPPD_ID,
      client_secret: process.env.UNTAPPD_SECRET,
      q: searchParameters
    })
    .end(function(results){
      resolve(results)
    })
  })
}

function getBeer(beerID) {
  return new Promise(function(resolve,reject){
    unirest.get('https://api.untappd.com/v4/beer/info/' + beerID)
    .header({'Accept': 'application/json'})
    .query({
      client_id: process.env.UNTAPPD_ID,
      client_secret: process.env.UNTAPPD_SECRET
    })
    .end(function(results){
      resolve(results)
    })
  })
}

router.get('/', function(req, res){
  new Beers()
    .fetch({withRelated:
      'Brewery'
    }).then(function(beers){
      res.status(200).send(beers)
    })
})

router.post('/search', function(req,res) {
  var searchParameters = req.body.search;
  var beerID = req.body.BID
  if (searchParameters) {
    searchBeers(searchParameters)
    .then(function(response){
      res.status(200).send(response)
    })
  } else if (beerID) {
    getBeer(beerID)
      .then(function(results){
        res.status(200).send(results)
      })
  } else {
    res.status(404).send('Please enter a search parameter or Beer ID.')
  }
})

router.post('/kegchange', function(req, res){
  var kegID;
  var deviceID = req.body.device_id;
  var untappdID = req.body.untappd_id;
  var sizeID = req.body.size_id;

  function addNewPurchasedKeg(kegID) {
    new PurchasedKeg({
      keg_id: kegID,
      device_id: deviceID,
      size_id: sizeID,
      active: true,
    }).save()
    .then(function(results){
      console.log('sending results. Results: ', results);
      res.send(results)
    })
  }

  PurchasedKeg.where({'device_id': deviceID, 'active': 'true'}).save({'active': 'false'}, {patch: true})
  .then(function(){
    return new Keg({untappd_id: untappdID}).fetch()
  })
  .then(function(results){
    if (!results) {
      new Keg({untappd_id: untappdID}).save()
      .then(function(results){
        addNewPurchasedKeg(results.id)
      })
    } else {
      kegID = results.id
      addNewPurchasedKeg(kegID)
    }
  })
})

module.exports = router;
