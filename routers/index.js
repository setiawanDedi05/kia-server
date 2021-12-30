
const router = require('express').Router()
const treatmentRouter = require('./treatmentRouter.js')
<<<<<<< HEAD
const tipsRouter = require('./tipsRouter.js')

// router.use('/treatment', treatmentRouter)
router.use('/tips', tipsRouter)

=======
const childrenRouter = require('./childrensRouter')
router.use('/treatment', treatmentRouter)
router.use('/children', childrenRouter )
>>>>>>> input_childrens
module.exports = router