var express = require('express');
var router = express.Router();
const passport = require('passport')
const PlateUser = require('../models/plateUser')
const reviewCtrl = require('../controllers/reviews')

router.get('/reviews/new/:id',reviewCtrl.new)

router.post('/reviews',reviewCtrl.addReview)

module.exports = router;



// qcqADUwhB8vmWNL6