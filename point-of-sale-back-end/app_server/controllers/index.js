var mongoose = require('mongoose');
var Emp = requre('../models/sales');


module.exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
}

module.exports.sale = function(req, res, next) {
  res.render('index', { title: 'Express' });
  Emp.find({}).exec(function(res, err){
    if (err) throw err;
    res.end(res.toString());
  });
}

 