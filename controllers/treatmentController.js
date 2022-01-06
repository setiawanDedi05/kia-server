const { Treatments, MedicalRecord} = require('../models/')
const { Op } = require("sequelize")

class Treatment{
    static async getAllTreatment(req, res) {
        try {
            const result = await Treatments.findAll()
            res.status(200).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async getAll(req, res) {
        try {
            const treatments = await Treatments.findAll()
            const medicalRecord = await MedicalRecord.findAll({
                where: {
                    id_children : req.params.id_children
                }
            })
            let result = []
            treatments.forEach((treat, key) => {
                    // console.log(medicalRecord[key] === undefined);
                    if (medicalRecord[key] === undefined || medicalRecord[key].id_treatment !== treat.id) {
                        result.push(treat)
                    } 
            })
            let response = result[0]
            res.status(200).json({response})
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async postTreatment(req, res) {
        const data = req.body
        try {
            const result = await Treatments.create(data)
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = Treatment