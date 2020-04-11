const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const { port } = require('../config')
const sellerRoute = require('../Routes/api/Seller')
const renderRoute = require('../Routes/render')

const app = express()
app.set('port', port)

// Middelwares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routes
app.use('/api/seller', sellerRoute)
app.use('/', renderRoute)

module.exports = app
