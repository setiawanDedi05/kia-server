const {Childrens} = require('../models/')
class Children {
    // static async getAll(req, res) {
    //     try {
    //         const result = await Childrens.findAll()
    //         res.status(200).json({ result })
    //     } catch (error) {
    //         res.status(500).json({ error })
    //     }
    // }

    static getAll(req, res) {

            Childrens.findAll()
        .then((result) => {
            res.status(200).json({ result })
        })
        // .catch (error => {
        //     res.status(500).json({ error })
        // }) 
    }

    // static async getAllByIdParent(req, res, next) {
    //     try {
    //         const result = await Childrens.findAll({
    //             where: {
    //                 id_parent:req.params.id_parent
    //             }
    //         })
    //         if(result) {
    //             res.status(200).json({result})
    //         }
    //     } catch (error) {
    //         res.status(404).json({error})
    //     }
    // }
    static getAllByIdParent(req, res, next) {
            Childrens.findAll({
                where: {
                    id_parent:req.params.id_parent
                }
            })
            .then((result) => {
                if(result.length>0) {
                    res.status(200).json({result})
                } else {
                    throw 'no result'
                }
            })
            .catch (error => {
                res.status(404).json({error})
            }) 
        }
    

    static async getOne(req, res) {
        try {
            const result = await Childrens.findOne({where:  {id: req.params.id }})
            res.status(200).json({ result })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    static async addChildren(req, res) {
        const { name, nik, pob, dob, weight, height, headCirc, gender, status, id_parent } = req.body
        console.log(parseFloat(weight), weight);
        try {
            const result = await Childrens.create({name, nik, pob, dob, weight:parseFloat(weight), height:parseFloat(height), headCirc: parseFloat(headCirc), gender, status, id_parent})
            res.status(201).json({result})
        } catch (error) {
            res.status(500).json({error})
        }
    }
}

module.exports = Children