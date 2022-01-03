
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')
const tipsRouter = require('./tipsRouter.js')
const childrenRouter = require('./childrensRouter')
const medicalRecordRouter = require('./medicalRecordRouter')
// router.use('/treatment', treatmentRouter)
router.use('/tips', tipsRouter)
router.use('/treatment', treatmentRouter)
router.use('/children', childrenRouter )
router.use('/medicalRecord', medicalRecordRouter  )
module.exports = router