require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var Kegs = require('../../bookshelf/collections/kegs').collection
var Keg = require('../../bookshelf/models/keg')
var PurchasedKegs = require('../../bookshelf/collections/purchasedKegs').collection
var PurchasedKeg = require('../../bookshelf/models/purchasedKeg')

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
  var dbResponse, utResponse;
  new Kegs()
    .fetch()
  .then(function(results){
    dbResponse = results;
    var promiseArray = [];
    dbResponse.forEach(function(element){
      promiseArray.push(getBeer(parseInt(element.attributes.untappd_id)))
    })
    return Promise.all(promiseArray)
  })
  .then(function(results){
    results.forEach(function(element) {
      console.log(element.status, element);
      if (element.status !== 200) {
        res.status(element.status).send(element.body.meta.error_detail)
        return;
      }
    })
    utResponse = results;
    var resultsArray = [];
    utResponse.forEach(function(utElement){
      dbResponse.forEach(function(dbElement) {
        if (dbElement.attributes.untappd_id == utElement.body.response.beer.bid) {
          utElement.body.response.beer.atreidesEntry = dbElement.attributes
          resultsArray.push(utElement.body.response)
        }
      })
    })
    res.send(resultsArray);
  })
})

router.post('/search', function(req,res) {
  var searchParameters = req.body.search;
  var beerID = req.body.BID
  if (searchParameters) {
    searchBeers(searchParameters)
    .then(function(response){
      res.send(response)
    })
  } else if (beerID) {
    getBeer(beerID)
      .then(function(results){
        res.send(results)
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
