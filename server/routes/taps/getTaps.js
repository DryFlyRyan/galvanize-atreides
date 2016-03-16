var express = require('express');
var router = express.Router();

var taps = [{
  id: 123,
  name: "4th Floor Tap",
  campus: "Platte",
  campus_id: 25315,
  location: "Denver",
  currentBeer: "Mirror Pond",
  brewery: "Deschutes Brewing",
  distributor: "Dan's Distributing",
  size: "Quarter Barrel",
  dateSinceTapped: 3.5,
  times: [],
  volume: 992,
  volumeRead: 120,
  schedule:
  [
    {
      day: "Monday",
      open: "2:30 PM",
      close: "6:00 PM"
    },
    {
      day: "Tuesday",
      open: "10:30 AM",
      close: "12:45 PM"
    },
    {
      day: "Tuesday",
      open: "2:30 PM",
      close: "6:00 PM"
    },
    {
      day: "Wednesday",
      open: "2:30 PM",
      close: "6:00 PM"
    },
    {
      day: "Thursday",
      open: "2:30 PM",
      close: "6:00 PM"
    },
    {
      day: "Friday",
      open: "2:30 PM",
      close: "6:00 PM"
    },
    {
      day: "Saturday",
      open: null,
      close: null
    },
    {
      day: "Sunday",
      open: null,
      close: null
    },
  ]
},
{
  id: 245,
  name: "Downstairs Tap",
  campus: "Golden Triangle",
  campusID: 214398,
  location: "Denver",
  currentBeer: "Arrogant Bastard",
  brewery: "Stone Brewing",
  distributor: "JSON Distributing",
  size: "Quarter Barrel",
  dateSinceTapped: 4.5,
  times: [],
  volume: 992,
  volumeRead: 553,
  schedule:
  [
    {
      day: "Monday",
      open: "4:00 PM",
      close: "6:00 PM"
    },

    {
      day: "Tuesday",
      open: "4:00 PM",
      close: "8:00 PM"
    },
    {
      day: "Wednesday",
      open: "4:00 PM",
      close: "8:00 PM"
    },
    {
      day: "Thursday",
      open: "4:00 PM",
      close: "8:00 PM"
    },
    {
      day: "Friday",
      open: "4:00 PM",
      close: "6:00 PM"
    },
    {
      day: "Saturday",
      open: null,
      close: null
    },
    {
      day: "Sunday",
      open: null,
      close: null
    },
  ]
}]

router.get('/', function(req, res){
  res.send(taps);
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
