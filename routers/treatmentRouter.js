const Treatment = require('../controllers/treatmentController')

const route = require('express').Router()

route.get('/', Treatment.getAllTreatment)
route.get('/:id_children', Treatment.getAll)
route.post('/', Treatment.postTreatment)

module.exports = route