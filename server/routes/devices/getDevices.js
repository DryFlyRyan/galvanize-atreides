var express = require('express');
var router = express.Router();

var devices = [{
  id: 123,
  name: "4th Floor Tap",
  campus: "Platte",
  location: "Denver",
  currentBeer: "Mirror Pond",
  brewery: "Descutes Brewing",
  distributor: "Dan's Distributing",
  size: "Quarter Barrel",
  currentDate: new Date(),
  dateSinceTapped: 3.5,
  times: [],
  findTimes: function() {
    var day = $filter('date')(this.currentDate, "EEEE")
    var open;
    var close;
    var timeArray = []
    this.schedule.forEach(function(element) {
      // console.log(day, element.day);
      // console.log(day == element.day);
      if (day == element.day) {
        open = element.open;
        close = element.close;
        timeArray.push({openTime: open, closeTime: close});
      }
    })
    this.times = timeArray;
  },
  volume: 992,
  volumeRead: 120,
  flowRate: function() {
    return this.volumeRead / this.dateSinceTapped;
  },
  volumeRemaining: function() {
    return this.volume - this.volumeRead;
  },
  poursRemaining: function() {
    return this.volumeRemaining() / 12;
  },
  timeUntilEmpty: function() {
    return this.volumeRemaining() / this.flowRate()
  },
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
  location: "Denver",
  currentBeer: "Arrogant Bastard",
  brewery: "Stone Brewing",
  distributor: "JSON Distributing",
  size: "Quarter Barrel",
  currentDate: new Date(),
  dateSinceTapped: 4.5,
  times: [],
  findTimes: function() {
    var day = $filter('date')(this.currentDate, "EEEE")
    var open;
    var close;
    var timeArray = []
    this.schedule.forEach(function(element) {
      if (day == element.day) {
        open = element.open;
        close = element.close;
        timeArray.push({openTime: open, closeTime: close});
      }
    })
    this.times = timeArray;
  },
  volume: 992,
  volumeRead: 120,
  flowRate: function() {
    return this.volumeRead / this.dateSinceTapped;
  },
  volumeRemaining: function() {
    return this.volume - this.volumeRead;
  },
  poursRemaining: function() {
    return this.volumeRemaining() / 12;
  },
  timeUntilEmpty: function() {
    return this.volumeRemaining() / this.flowRate()
  },
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
  res.send(devices);
})

module.exports = router;
