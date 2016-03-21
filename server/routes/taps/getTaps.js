var express = require('express');
var router = express.Router();

var taps = [{
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
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Tuesday",
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Tuesday",
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Wednesday",
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Thursday",
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Friday",
      open: {
        hour: 14,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
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
  volume: 992,
  volumeRead: 553,
  schedule:
  [
    {
      day: "Monday",
      open: {
        hour: 16,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },

    {
      day: "Tuesday",
      open: {
        hour: 16,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Wednesday",
      open: {
        hour: 16,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Thursday",
      open: {
        hour: 16,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Friday",
      open: {
        hour: 16,
        minute: 30
      },
      close: {
        hour: 18,
        minute: 0
      }
    },
    {
      day: "Saturday",
      open: {
        hour: 13,
        minute: 0
      },
      close: {
        hour: 17,
        minute: 0
      }
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
