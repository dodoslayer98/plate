var express = require('express');
var router = express.Router();
const passport = require('passport')
const PlateUser = require('../models/plateUser')
const reviewCtrl = require('../controllers/reviews')

router.get('/reviews/new/:id',reviewCtrl.new)
router.get('/reviews/:id/edit',reviewCtrl.edit)
router.post('/reviews',reviewCtrl.addReview)
router.delete('/reviews/:id',reviewCtrl.delete)
router.put('/reviews/:id',reviewCtrl.update)

module.exports = router;


