const route = require('express').Router()

route.get('/', (req, res, next) => res.status(200).send('Hello'))

module.exports = route
