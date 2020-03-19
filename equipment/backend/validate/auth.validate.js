// var db = require('../db');
var md5 = require('md5');
var userModel = require('../models/user.model');

module.exports.postLogin = async (req, res, next) => {
  console.log("enter");
  // res.send("enter");
  // var email = req.body.email;
  //hashed
  var password = md5(req.body.password);
  var user;
  await userModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      // console.log("user begin: " + user);
      if (!user) {
        return res.json(
          { 'error': 'User does not exist' }
        )
      } else if (user.password != password) {
        return res.status(401).json(
          { 'error': 'Password incorrect' }
        )
      }
    }
    // console.log('save id into cookies');
    console.log(user._id);
    res.cookie('userId', user._id, { signed: true });
    // res.cookie('isAdmin', user.isAdmin, { signed: true });
    next();
  })
}