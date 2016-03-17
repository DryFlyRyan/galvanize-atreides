require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var RequestBeers = unirest.get('https://api.untappd.com/v4/search/beer')

router.get('/', function(req,res){
  res.send("please enter a search query")
})

router.post('/', function(req,res) {
  console.log(req.body.search);
  var searchParameters = req.body.search;
  RequestBeers
    .header({'Accept': 'application/json'})
    .query({
      client_id: process.env.UNTAPPD_ID,
      client_secret: process.env.UNTAPPD_SECRET,
      q: searchParameters
    })
    .end(function(response){
      res.send(response)
    })
})

module.exports = router;
