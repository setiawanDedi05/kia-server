const { MedicalRecord } = require('../models/')
class MedicalRecordController {
    static async getAll(req, res) {
        try {
            const result = await MedicalRecord.findAll()
            res.status(201).json({ result })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async getPerChildren(req, res) {
        try {
            const result = await MedicalRecord.findAll({
                where: {
                    id_children: req.params.idChildren
                }
            })
            console.log(result);
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async postMedicalRecord(req, res) {
        const data = req.body
        try {
            const result = await MedicalRecord.create(data)
            console.log(result);
            res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = MedicalRecordController