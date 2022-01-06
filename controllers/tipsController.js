const { Tip } = require('../models')
const { Op } = require("sequelize")
const e = require('express')

class TipsController{
  // static async addTip (req, res) {
  //   try {
  //     const result = await Tip.create(req.body)
  //     console.log(result)
  //     res.status(201).json({result})
  //   } catch (error) {
  //     res.status(500).json({error})
  //   }
  // }
  static addTip (req, res) {
      Tip.create(req.body)
      .then((result) => {
        res.status(201).json({result})
      })
      // .catch ((error) => {
      //   res.status(500).json({error})
      // }) 
  }

  // static async getTip (req, res) {
  //   try {
  //     const { age } =  req.params
  //     const result = await Tip.findOne({
  //       where: {
  //         phase : age
  //       }
  //     })
  //     res.status(200).json({result})
  //   } catch (error) {
  //     res.status(500).json({error})
  //   }
  // }

  static getTip (req, res) {

      const { age } =  req.params
      Tip.findOne({
        where: {
          phase : age
        }
      })
      .then((result) => {
          res.status(200).json({result})
      })
      // .catch ((error) => {
      //   res.status(500).json({error})
      // }) 
    }

  // static async showAllTips (req, res) {
  //   try {
  //     const result = await Tip.findAll()
  //     res.status(200).json({result})
  //   } catch (error) {
  //     res.status(500).json(error)
  //   }
  // }

  static showAllTips (req, res) {
      Tip.findAll()
      .then((result) => {
        res.status(200).json({result})
      })
    // .catch (error => {
    //   res.status(500).json(error)
    // }) 
    }
}

module.exports = TipsController