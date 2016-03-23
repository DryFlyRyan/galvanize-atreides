require('dotenv').load()
var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var crud = require('./crud.js')

function generateFlowData(deviceID, kegID, pulseData){
  return new Promise(function(resolve,reject){
    crud.flow.createFlowLog(deviceID, kegID, pulseData)
    .then(function(results){
      resolve(results)
    })
  })
}

module.exports = {
  generateFlowData: generateFlowData
}
