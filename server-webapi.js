const port = process.env.API_PORT || 5000
const bodyParser = require('body-parser')
const express = require('express')
const initMongoDB = require('./server-mongodb')
const cors = require('cors')
const app = express()
require('dotenv').config()

//  middleware   

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


// routes/controllers

app.use('/api/products', require('./controllers/productsController'))
app.use('/api/users', require('./controllers/usersController'))

// initialize

initMongoDB()
app.listen(port, () => console.log(`Web Api is running on http://localhost:${port}`))

