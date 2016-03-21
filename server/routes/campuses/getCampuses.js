require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');

var RequestCampuses = unirest.get('https://members.galvanize.com/api/v1/campuses')

router.get('/', function(req, res){
  RequestCampuses
    .header({'Accept': 'application/json'})
    .auth({user: process.env.GALVANIZE_USER,                      pass: process.env.GALVANIZE_TOKEN,
    sendImmediately: true
         })
    .end(function(response){
      // console.log(response);
      res.send(response.body.results)
    })
})

module.exports = router;
