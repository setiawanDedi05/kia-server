
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')

router.use('/treatment', treatmentRouter)

module.exports = router