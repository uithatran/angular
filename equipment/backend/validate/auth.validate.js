var jwt = require("jsonwebtoken");
var md5 = require('md5');

var config = require("../config/auth.config");
var User = require('../models/user.model');
var Role = require('../models/role.model')


// LOGIN
module.exports.postLogin = async (req, res, next) => {
  var password = md5(req.body.password);
  //hashed
  await User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      res.send(err);
    } else {
  // console.log(req.body);

      // var password = md5(req.body.password);
      if (!user) {
  console.log(123);

        // return res.status(404).send({ message: "User Not found." });
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
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    // console.log(user._id);
    // res.cookie('userId', user._id, { signed: true });
    // res.cookie('isAdmin', user.isAdmin, { signed: true });

    var authorities = [];

    for (let i = 0; i < user.roles.length; i++) {
      console.log(user.roles[i].name);
      authorities.push("ROLE_" + user.roles[i].name);
    }
    console.log("123123");
    res.status(200).send({
      id: user._id,
      name: user.username,
      email: user.email,
      roles: authorities,
      access_token: token
    });
    // next();
  })
}


// SIGNUP
exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
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
};