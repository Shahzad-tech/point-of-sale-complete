var mongoose = require('mongoose');
var Cashier = require('../models/cashier');
var Admin = require('../models/admin');

module.exports = function(req, res, next) {
    res.send('respond with a resource');
}