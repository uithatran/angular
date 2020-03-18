var Usermodel = require('../models/user.model');
var EquipmentModel = require('../models/equipment.model');

var md5 = require('md5');

module.exports.index = async (req, res) => {
  var page = parseInt(req.query.page || 1);
  var perPage = 5;
  var drop = (page - 1) * perPage;
  var start = (page - 1) * perPage;
  var end = page * perPage;
  var totalPage;
  const users = await Usermodel.find((err, data) => {
    if (err) {
      console.log("error in get User");
      return next(err);
    } else {
      totalPage = Object.keys(data).length / perPage;
      totalPage = (totalPage > parseInt(totalPage) ? parseInt(totalPage) + 1 : totalPage);
      // data = data.slice(start,end);
      res.json({data,totalPage});
    }
  });

};

module.exports.userView = function (req, res) {
  var id = req.params.id;
  async function equipmentFunction() {
    var equipments = await EquipmentModel.find({ userSelectedId: id }, function (err, equipments) {
      if (err) {
        return next(err);
      } else {
        return equipments;
      }
    })

    var user = await Usermodel.findById(id, function (err, user) {
      if (err) {
        console.error(err);
      } else {
      }
    })
    res.render('user/view', {
      user: user,
      equipments: equipments,
    })
  }

  equipmentFunction();
}

module.exports.getCreate = function (req, res) {
  res.render('user/create');
}

// 3.Query parameters
module.exports.search = function (req, res) {
  var q = req.query.q;
  Usermodel.find(function (err, user) {
    if (err) {
      res.send("Error in use.controller.search");
    } else {
      var matchedUsers = user.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
      })
      if (matchedUsers == "")
        matchedUsers = {}
      res.render('user/index', {
        users: matchedUsers,
      })
    }
  })
}

module.exports.delete = function (req, res) {
  userDeleteId = { _id: req.params.id };
  Usermodel.deleteOne(userDeleteId, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/users');
    }
  })
}

module.exports.postCreate = function (req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    password: md5(req.body.password),
    phone: req.body.phone,
    position: req.body.position,
  }

  Usermodel.create(user, function (err, user) {
    if (err) {
      console.error(err);
      return res.status(500).send();
    } else {
      console.log("daden");
      res.send('123123');
    }
  })
}
