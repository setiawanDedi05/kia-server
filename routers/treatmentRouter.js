const Treatment = require('../controllers/treatmentController')

const route = require('express').Router()

route.get('/', Treatment.getAll)

module.exports = route