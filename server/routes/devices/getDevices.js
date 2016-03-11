var express = require('express');
var router = express.Router();

var devices = [
  {
    serial: "ja2jka34564",
    type: "Raspberry Pi 3",
    dateActivated: 1457745302,
    photoURL: "http://everyday-tech.com/wp-content/uploads/2015/03/Update_RaspberryPi_ModelB_Pi2.jpg"
  }
]

router.get('/', function(req, res){
  res.send(devices);
})

module.exports = router;
