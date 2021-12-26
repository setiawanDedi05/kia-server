
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')
const tipsRouter = require('./tipsRouter.js')

// router.use('/treatment', treatmentRouter)
router.use('/tips', tipsRouter)

module.exports = router