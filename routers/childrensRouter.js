const Children = require('../controllers/childrenController')
const route = require('express').Router()

route.get('/', Children.getAll)
route.get('/:id', Children.getOne)
route.post('/', Children.postTreatment)
route.put('/:id', Children)

module.exports = route