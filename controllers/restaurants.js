const PlateUser = require('../models/plateUser');
const Restaurant = require('../models/restaurants')

module.exports = {
    index,
    show
}

function index(req, res, next) {
    const allReviews = PlateUser.find({},function(err,reviews){
    })
    res.render('home/restaurants',{restaurants:Restaurant.getAll()} )
}

function show(req,res,next) {
    const userReviews = req.user.reviews.filter(review => review.restId == req.params.id )
    res.render('home/restaurantshow',{
        restaurantView:Restaurant.getOne(req.params.id),
        reviews:userReviews
    })
}


