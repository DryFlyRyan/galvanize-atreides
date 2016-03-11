var express = require('express');
var router = express.Router();

var campuses = [
  {
    id: 25315,
    name: "Platte",
    photoURL: "http://images1.westword.com/imager/u/745xauto/7132948/brider-ext.jpg",
    city: "Denver",
    state: "Colorado",
    country: "United States",
  },
  {
    id: 214398,
    name: "Golden Triangle",
    photoURL: "http://www.xconomy.com/wordpress/wp-content/images/2014/06/Denver-Golden-Triangle.jpg",
    city: "Denver",
    state: "Colorado",
    country: "United States"
  },
]

router.get('/', function(req, res){
  res.send(campuses);
})

module.exports = router;
