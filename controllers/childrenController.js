const {Childrens} = require('../models/')
class Children {
    static async getAll(req, res) {
        try {
            const result = await Childrens.findAll()
            res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error })
        }
    }

    static async getOne(req, res) {
        try {
            const result = await Childrens.findOne({ id: req.params.id })
            res.status(201).json({ result })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async postTreatment(req, res) {
        const data = req.body
        try {
            const result = await Childrens.create(data)
            console.log(result);
            res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}

module.exports = Children