const {Treatments} = require('../models/')
const { Op } = require("sequelize")

class Treatment{

    static async getAll(req, res){
        try {
            const result = await Treatments.findAll({limit:1})
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async getPerMonth(req, res) {
        console.log(+req.params.age);
        try {
            const result = await Treatments.findAll({
                where: {
                    month: {
                    [Op.lte]:+req.params.age
                }
                }
            })
            console.log(result);
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async postTreatment(req, res) {
        const data = req.body
        try {
            const result = await Treatments.create(data)
            console.log(result);
            res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = Treatment