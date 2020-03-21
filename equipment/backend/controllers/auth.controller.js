var User = require('../models/user.model');
var Role = require('../models/role.model');
var md5 = require('md5');

module.exports.logout = function (req, res) {
  // res.clearCookie('userId');
  // res.clearCookie('isAdmin');
  res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
  var success = {success: "Login success"};
  return res.status(200).json(success);
}

module.exports.signup = function(req, res) {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    position: req.body.position,
    password: md5(req.body.password)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      // role is user if not specifying role
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
}
