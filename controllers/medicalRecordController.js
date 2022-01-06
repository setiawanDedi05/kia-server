const { MedicalRecord, Childrens } = require('../models/')
class MedicalRecordController {
    // static async getAll(req, res) {
    //     try {
    //         const result = await MedicalRecord.findAll()
    //         res.status(200).json({ result })
    //     } catch (error) {
    //         res.status(500).json({ error })
    //     }
    // }

    static getAll(req, res) {
            MedicalRecord.findAll()
            .then((result) => {
                res.status(200).json({ result })
            })
        // .catch (error => {
        //     res.status(500).json({ error })
        // }) 
    }

    static async getPerChildren(req, res) {
        try {
            const result = await MedicalRecord.findAll({
                where: {
                    id_children: req.params.idChildren
                }
            })
            res.status(200).json({result})
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async postMedicalRecord(req, res, next) {
        const { id_children, id_treatment, id_midwife, place, height, weight, headCirc, note } = req.body
        try {
            const result = await MedicalRecord.create({
                id_children, id_treatment, id_midwife, place, height: parseFloat(height), weight: parseFloat(weight), headCirc: parseFloat(headCirc), note
            })
            const updateData = await Childrens.update({
                height: parseFloat(height), weight: parseFloat(weight), headCirc: parseFloat(headCirc)
            }, {
                where: {
                    id: id_children
                }
            })
            res.status(200).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }
}

module.exports = MedicalRecordController