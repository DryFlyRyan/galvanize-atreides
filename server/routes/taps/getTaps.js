var express = require('express');
var router = express.Router();
var crud = require('../../crud')
var unirest = require('unirest');

function returnTaps() {
  return new Promise(function(resolve, reject){
    // console.log("Attempting to return Taps");
    var devicesArray;
    var resultsArray = [];
    crud.taps.requestTapByDevices()
    .then(function(devices){
      // deviceArray.push(devices)
      devicesArray = devices;
      // console.log(devices);
      var promiseArray = devices.map(findSchedule)
      return Promise.all(promiseArray);
    })
    .then(function(results){
      // console.log(results);
      devicesArray.forEach(function(device){
        results.forEach(function(schedule){
          if (device.device_id === schedule[0].device_id) {
            device.schedule = schedule[0].schedule;
            resultsArray.push(device);
          }
        })
      })
    }).then(function(){
      var flowArray = devicesArray.map(findFlowData)
      return Promise.all(flowArray)
    }).then(function(results){
      // console.log(results);
      devicesArray.forEach(function(device){
        results.forEach(function(flowData){
          console.log(flowData[0].device_id);
          if (device.device_id === flowData[0].device_id) {
            device.flowData = flowData
            console.log(device.flowData);
          }
        })
      })
      // console.log(devicesArray);
      resolve(devicesArray)
    })
  })
}

function findSchedule(element){
  return new Promise(function(resolve,reject){
    crud.schedules.getSchedule(element).then(function(schedule){
      resolve(schedule);
    })
  })
}

function findFlowData(element){
  return new Promise(function(resolve,reject){
    crud.flow.getFlowByKeg(element).then(function(flowData){
      resolve(flowData)
    })
  })
}

function getCurrentKeg(deviceID) {
  crud.kegs.getCurrentKeg(deviceID)
  .then(function(keg){
    crud.kegs.getKeg(keg.id)
  })
}

router.get('/', function(req, res){
  console.log('root route hit');
  returnTaps()
  .then(function(taps){
    res.send(taps);
  })
})

router.get('/:tapID', function(req,res) {
  taps.forEach(function(element){
    if (element.id === parseInt(req.params.tapID)) {
      console.log(element);
      res.send(element);
    }
  })
})

module.exports = router;


// var deviceSeed = [{
//   name: "4th Floor Tap",
//   campus: "Platte",
//   campus_id: 25315,
//   location: "Denver",
//   currentBeer: "Mirror Pond",
//   brewery: "Deschutes Brewing",
//   distributor: "Dan's Distributing",
//   size: "Quarter Barrel",
//   dateSinceTapped: 3.5,
//   times: [],
//   volume: 992,
//   volumeRead: 120,
//   schedule:
//   [
//     {
//       day: "Monday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Tuesday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Tuesday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Wednesday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Thursday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Friday",
//       open: {
//         hour: 14,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Saturday",
//       open: null,
//       close: null
//     },
//     {
//       day: "Sunday",
//       open: null,
//       close: null
//     },
//   ]
// },
// {
//   id: 245,
//   name: "Downstairs Tap",
//   campus: "Golden Triangle",
//   campusID: 214398,
//   location: "Denver",
//   currentBeer: "Arrogant Bastard",
//   brewery: "Stone Brewing",
//   distributor: "JSON Distributing",
//   size: "Quarter Barrel",
//   dateSinceTapped: 4.5,
//   volume: 992,
//   volumeRead: 553,
//   schedule:
//   [
//     {
//       day: "Monday",
//       open: {
//         hour: 16,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//
//     {
//       day: "Tuesday",
//       open: {
//         hour: 16,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Wednesday",
//       open: {
//         hour: 16,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Thursday",
//       open: {
//         hour: 16,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Friday",
//       open: {
//         hour: 16,
//         minute: 30
//       },
//       close: {
//         hour: 18,
//         minute: 0
//       }
//     },
//     {
//       day: "Saturday",
//       open: {
//         hour: 13,
//         minute: 0
//       },
//       close: {
//         hour: 17,
//         minute: 0
//       }
//     },
//     {
//       day: "Sunday",
//       open: null,
//       close: null
//     },
//   ]
// }]
