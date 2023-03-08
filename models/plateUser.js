const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewSchema = new Schema ({
    restaurantName: String,
    foodItem: String, 
    content: String,
    rating: {
        type: Number, 
        min : 1,
        max : 5
    },
},{
    timestamps: true
})

const plateUserSchema = new Schema ({
    name : String,
    email: String,
    reviews: [reviewSchema],
    googleId: String
    
})

module.exports = mongoose.model('plateUser', plateUserSchema)