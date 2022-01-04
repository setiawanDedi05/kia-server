const { MedicalRecord, Childrens } = require('../models/')
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
        const { id_children, id_treatment, id_midwife, place, height, weight, headCirc, note } = req.body
        if (id_treatment == "-") {
            id_treatment = null
        }
        try {
            const result = await MedicalRecord.create({
                id_children, id_treatment, id_midwife, place, height: parseFloat(height), weight: parseFloat(weight), headCirc: parseFloat(headCirc), note
            })
            if (result) {
                const updateData = await Childrens.update({
                    height: parseFloat(height), weight: parseFloat(weight), headCirc: parseFloat(headCirc)
                }, {
                    where: {
                        id: id_children
                    }
                })
                if (updateData) {
                    res.status(200).json(result)
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = MedicalRecordController