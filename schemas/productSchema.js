const mongoose = require('mongoose')

const productSchema = mongoose.Schema ({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String},
    tag: {type: String},
    imageName: {type: String},
    rating: {type: Number},
    __v: { type: Number, select: false}
})

module.exports = mongoose.model("products", productSchema)