
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')
const childrenRouter = require('./childrensRouter')
router.use('/treatment', treatmentRouter)
router.use('/children', childrenRouter )
module.exports = router