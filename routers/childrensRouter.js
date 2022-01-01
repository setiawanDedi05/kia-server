const Children = require('../controllers/childrenController')
const route = require('express').Router()

route.get('/', Children.getAll)
route.get('/:id_parent', Children.getAllByIdParent)
route.get('/details/:id', Children.getOne)
route.post('/', Children.addChildren)
route.put('/:id', Children)

module.exports = route