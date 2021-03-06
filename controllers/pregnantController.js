const { Pregnants } = require('../models/')
class PregnantController {
    // static async getAll(req, res) {
    //     try {
    //         const result = await Pregnants.findAll()
    //         res.status(200).json({ result })
    //     } catch (error) {
    //         res.status(500).json({ error })
    //     }
    // }

    static getAll(req, res) {
            Pregnants.findAll()
            .then((result) => {
                res.status(200).json({ result })
            })
        // .catch (error => {
        //     res.status(500).json({ error })
        // }) 
        
    }

    // static async getPerParent(req, res) {
    //     try {
    //         const result = await Pregnants.findOne({
    //             where: {
    //                 id_parent: req.params.idParent,
    //                 status: 'janin'
    //             }
    //         })
    //         res.status(200).json({ result })
    //     } catch (error) {
    //         res.status(500).json({ error })
    //     }
    // }

    static  getPerParent(req, res) {

            Pregnants.findOne({
                where: {
                    id_parent: req.params.idParent,
                    status: 'janin'
                }
            })
            .then((result) => {
                if(result) {
                    res.status(200).json({ result })
                }else {
                    throw 'no result'
                }
            })
            .catch (error => {
                res.status(500).json({ error })
            }) 
    }

    static async postPregnants(req, res) {
        const { id_parent, status, lastMens } = req.body
        
        try {
            const result = await Pregnants.create({id_parent, status, lastMens})
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }
}

module.exports = PregnantController