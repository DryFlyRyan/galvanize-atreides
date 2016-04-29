require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

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
      console.log(element.status);
      if (element.status !== 200) {
        res.status(element.status).send(element.body.meta.error_detail)
      }
    })
    utResponse = results;
    var resultsArray = [];
    utResponse.forEach(function(utElement){
      dbResponse.forEach(function(dbElement) {
        if (dbElement.attributes.untappd_id == utElement.body.response.beer.bid) {
          utElement.body.response.beer.atreidesEntry = dbElement.attributes
          resultsArray.push(utElement.body.response.beer)
        }
      })
    })
    res.send(resultsArray);
  })
})

router.post('/', function(req,res) {
  var searchParameters = req.body.search;
  searchBeers(searchParameters)
    .then(function(response){
      res.send(response)
    })
})

router.get('/:BID', function(req, res) {
  var beerID = req.params.BID;
  getBeer(beerID)
    .then(function(results){
      res.send(results)
    })
})

module.exports = router;
