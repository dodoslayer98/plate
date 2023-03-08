var express = require('express');
var router = express.Router();
const passport = require('passport')
// const PlateUser = require('../models/plateUser')
const restaurantCtrl = require('../controllers/restaurants')


// router.use(isLogggedIn)
/* GET users listing. */
router.get('/',isLogggedIn, function(req, res, next) {
  res.render('home/index',{title: 'Plate',
  user: req.user} );
});

router.get('/restaurants',isLogggedIn,restaurantCtrl.index );
router.get('/restaurants/:id',isLogggedIn,restaurantCtrl.show );

function isLogggedIn(req,res,next){
  if ( req.isAuthenticated() ) return next();
  res.redirect('/')
}


module.exports = router;