var express = require('express');

var controller = require('../controllers/auth.controller');
var authValidate = require('../validate/auth.validate');
var checkSignup = require('../middlewares/verifySignUp');

// BT: CRUD = Create Retrieve Update Delete
var router = express.Router();

router.get('/logout', controller.logout);
router.post('/login', authValidate.postLogin, controller.postLogin);
router.post("/signup", checkSignup.checkEmailRole, controller.signup);

module.exports = router;