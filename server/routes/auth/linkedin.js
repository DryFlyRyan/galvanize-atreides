require('dotenv').load()
var express = require('express');
var router = express.Router();
var passport = require('passport')


router.get('/',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });

module.exports = router;
