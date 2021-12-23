const Treatment = require('../controllers/treatmentController')

const route = require('express').Router()

route.get('/', Treatment.getAll)
route.get('/:id', Treatment.getOne)
route.post('/', Treatment.postTreatment)

module.exports = route