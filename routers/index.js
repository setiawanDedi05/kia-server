
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')
const tipsRouter = require('./tipsRouter.js')
const childrenRouter = require('./childrensRouter')

// router.use('/treatment', treatmentRouter)
router.use('/tips', tipsRouter)
router.use('/treatment', treatmentRouter)
router.use('/children', childrenRouter )
module.exports = router