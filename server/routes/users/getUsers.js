var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    photoURL: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAYFAAAAJDRiNzc2OTA2LWRjMGEtNDA0ZS05MmQ5LTI3MWVmNDgzNDZjMQ.jpg",
    firstName: 'Ryan',
    lastName: 'Douglas',
  }
]

router.get('/', function(req, res){
  res.send(users);
})

router.get('/:userID', function(req,res){
  var userID = parseInt(req.params.userID)
  users.forEach(function(element) {
    console.log(typeof element.id);
    if (element.id === userID) {
      res.send(element);
    } else {
      res.send("No user found with that ID")
    }
  })
})

module.exports = router;
