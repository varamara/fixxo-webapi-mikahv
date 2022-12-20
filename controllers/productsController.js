const express = require('express')
const controller = express.Router()
const productSchema = require('../schemas/productSchema')


// Get all products

controller.route('/').get(async(req, res) => {
    const products = []
    const list = await productSchema.find()
    if (list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description, 
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else 
        res.status(400).json()
})

// Get products from category

controller.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })
    if (list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description, 
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else 
        res.status(400).json()
})

// Get a number of products from category

controller.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if (list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description, 
                price: product.price,
                category: product.category,
                tag: product.tag,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else 
        res.status(400).json()
})

// Get number with certain articlenumber

controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    if (product){
        res.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description, 
            price: product.price,
            category: product.category,
            tag: product.tag,
            imageName: product.imageName,
            rating: product.rating
        })
    } else 
        res.status(404).json()
})

// Create

controller.route('/').post(async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body

    if (!name || !price)
        res.status(400).json({text: 'Name and price is required.'})

    const item_exists = await productSchema.findOne({name})
    if (item_exists)
        res.status(409).json({text: 'A product with the same name already exists.'})
    else {
        productSchema.create ({
            name, 
            description, 
            price,
            category,
            tag,
            imageName,
            rating,
        }, (err, product) => {

            if(err)
            res.status(500).json({
                text: 'Something went wrong when we tried to create the product',
                errMessage: err.message,
            })
            res.status(201).json({text: `Product with article number ${product._id} was created successfully.`})
        })
    }
})

// Update

controller.route('/:articleNumber').put(async (req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json('No article number was specified')
    else {
        const product = await productSchema.findByIdAndUpdate(req.params.articleNumber, req.body, { new: true })
        if(!product) {
            return res.status(404).json({ text: `Product with article number ${req.params.articleNumber} was not found.`})
        } else {  
            res.status(200).json({text: `Product with article number ${req.params.articleNumber} was updated successfully.`})
        }
    }  
})

// Delete 

controller.route('/:articleNumber').delete(async (req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json('No article number was specified')
    else {
        const item = await productSchema.findById(req.params.articleNumber)
        if (item) {
            await productSchema.remove(item)
            res.status(200).json({text: `Product with article number ${req.params.articleNumber} was deleted successfully.`})
        } else {
            res.status(404).json({text: `Products with article number ${req.params.articleNumber} was not found.` })
        }
    }
})

module.exports = controller