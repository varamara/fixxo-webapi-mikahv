const mongoose = require('mongoose')

const productSchema = mongoose.Schema ({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String},
    tag: {type: String},
    rating: {type: Number},
    imageName: {type: String}
})

// Här är modellen/schemat för varje produkt, 
// den collection om hämtas nu är "products"

module.exports = mongoose.model("products", productSchema)