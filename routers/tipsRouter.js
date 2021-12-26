const tipsController = require('../controllers/tipsController')
const route = require('express').Router()

route.post('/', tipsController.addTip)
route.get('/:age', tipsController.getTip)

module.exports = route