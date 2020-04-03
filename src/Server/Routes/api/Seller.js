const route = require('express').Router()

// Services
const SellerService = require('../../services/SellerService')

route.post('/', async (req, res, next) => {
  try {
    const result = await SellerService.create(req.body)

    res.status(200).json(result)
    res.end()
  } catch (err) {
    next(err)
  }
})

module.exports = route
