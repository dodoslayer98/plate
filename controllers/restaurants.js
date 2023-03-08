const PlateUser = require('../models/plateUser');
const Restaurant = require('../models/restaurants')

module.exports = {
    index,
    show
}

function index(req, res, next) {
    res.render('home/restaurants',{restaurants:Restaurant.getAll()} )
}

function show(req,res,next) {
    res.render('home/restaurantshow',{restaurantView:Restaurant.getOne(req.params.id)})
}