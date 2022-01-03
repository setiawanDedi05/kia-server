const MedicalRecord = require('../controllers/medicalRecordController')

const route = require('express').Router()

route.get('/', MedicalRecord.getAll)
route.get('/:idChildren', MedicalRecord.getPerChildren)
route.post('/', MedicalRecord.postMedicalRecord)

module.exports = route