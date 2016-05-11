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

router.get('/loginfailure', function(req, res){
  res.status(500).send('User Could Not Be Found')
})

router.get('/callback', passport.authenticate('linkedin', {
  failureRedirect: '/login'
}),
function(req, res) {
  res.status(200).send(req.user)
}
)

module.exports = router;
