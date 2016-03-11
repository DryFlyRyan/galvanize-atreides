var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    firstName: 'Ryan',
    lastName: 'Douglas',
  }
]

router.get('/', function(req, res){
  res.send(users);
})

module.exports = router;
