var mongoose = require('mongoose');
var Cashier = require('../models/cashier');

module.exports.getCashiers = async (req, res, next) => {
    await Cashier.find({}, (err,cashiers) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!cashiers.length) {
            return res.status(200).json({success: false, error: "Cashiers not found"})
        }
        return res.status(200).json({success: true, data: cashiers})
    }).catch(err => console.log(err))
}