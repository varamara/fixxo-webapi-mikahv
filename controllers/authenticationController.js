const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const controller = express.Router()

const  { generateAccessToken } = require('../middlewares/authorization')
const userSchema = require('../schemas/userSchema')

// unsecured routes

controller.route('/signup').post(async(req, res) => {
    const {firstName, lastName, email, password} = req.body

    if (!firstName || !lastName || !email  || password)
        res.status(400).json({text:'firstName, lastName, email and password is required'})

    const exists = await userSchema.findOne({email})
    if(exists)
        res.status(409).json({text:'a user with the same email already exists'})
    else {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await userSchema.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })

        if (user)
            res.status(201).json({text: 'User was created successfully'})
        else
            res.status(400).json({text: 'Something went wrong'})
    }
})

controller.route('/signin').post(async(req, res) => {
    const {email, password} = req.body

    if (!firstName || !lastName || !email  || password)
        res.status(400).json({text:'Email and password is required'})
        
    const user = await userSchema.findOne({email})
    if(user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            accessToken: generateAccessToken(user._id)
        }) 

        } else {
            res.status(400).json({text: 'Incorrect e-mail or password.'})
        }
})

module.exports = controller