const express = require('express')
const cors = require('cors')

const { port } = require('../config')
const sellerRoute = require('../Routes/api/Seller')

const app = express()
app.set('port', port)

// Middelwares
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/seller', sellerRoute)

module.exports = app
