const {Treatments} = require('../models/')

class Treatment{

    static async getAll(req, res){
        try {
            const result = await Treatments.findAll()
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async getOne(req, res) {
        try {
            const result = Treatments.findOne({ id: req.params.id })
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }
    

}

module.exports = Treatment