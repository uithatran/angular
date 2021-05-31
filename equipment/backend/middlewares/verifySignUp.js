var User = require('../models/user.model');
var db = require("../models");
var RoleArray = db.ROLES;

module.exports.checkEmailRole = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
          if (!RoleArray.includes(req.body.roles[i])) {
            res.status(400).send({
              message: `Failed! Role ${req.body.roles[i]} does not exist!`
            });
            return;
          }
        }
      }
      // console.log(123);
      next();
    }
  });
};
