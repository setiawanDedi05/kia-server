const PregnantController = require('../controllers/pregnantController')
const route = require('express').Router()

route.get('/', PregnantController.getAll)
route.get('/:idParent', PregnantController.getPerParent)
route.post('/', PregnantController.postPregnants)

module.exports = route