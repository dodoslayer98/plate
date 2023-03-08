const PlateUser = require('../models/plateUser')
const Restaurant = require('../models/restaurants')

module.exports = {
    new : newReview,
    addReview
}

function newReview(req,res,next){
    res.render('review/new',{restaurant:Restaurant.getOne(req.params.id)})
} 


function addReview(req,res,next){
    req.user.reviews.push(req.body)
    req.user.save(function(err){
        res.redirect(`/home/restaurants`)
    })
}
