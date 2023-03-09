const express = require('express');
const router = express.Router();
const passport = require('passport')
const PlateUser = require('../models/plateUser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Plate',
  user: req.user });
});



router.get('/auth/google', passport.authenticate(
  'google',
  {scope:['profile','email'] }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/home',
    failureRedirect : '/home'
  }
))

router.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    return res.redirect('/home');
  });
})


module.exports = router;

