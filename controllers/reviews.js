const PlateUser = require('../models/plateUser')
const Restaurant = require('../models/restaurants')

module.exports = {
    new : newReview,
    addReview,
    delete: delReview,
    edit,
    update : revUpdate

}

function revUpdate(req,res,next){
    PlateUser.findById({'_id':req.user.id}, function(err, user){
        const review = user.reviews.id(req.params.id); 
        for (let key in req.body) review[key] = req.body[key]
        user.save()
        res.redirect(`/home/restaurants/${review.restId}`)
    })
    
}


function newReview(req,res,next){
    res.render('review/new',{restaurant:Restaurant.getOne(req.params.id)})
} 

function edit(req,res,next){
    PlateUser.findOne({'reviews._id': req.params.id}, function(err, plateUser) {
        const reviewUp = plateUser.reviews.id(req.params.id)
        res.render('review/edit', {review:reviewUp})
      });
}


function addReview(req,res,next){
    req.user.reviews.push(req.body)
    req.user.save(function(err){
        res.redirect(`/home/restaurants/${req.body.restId}`)
    })
}

function delReview(req,res,next){
    PlateUser.findOne({'reviews._id': req.params.id}, function(err, plateUser) {
        const restId = plateUser.reviews.id(req.params.id).restId
        plateUser.reviews.id(req.params.id).remove();
        plateUser.save(function(err) {
          res.redirect(`/home/restaurants/${restId}`);
        });
      });
}