
module.exports.login = function (req, res) {
  // res.send("Auth Login");
  res.render('auth/login');
}

module.exports.logout = function (req, res) {
  res.clearCookie('userId');
  res.clearCookie('isAdmin');
  res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
  var success = {success: "Login success"};
  return res.status(200).json(success);
}