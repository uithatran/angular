var express = require('express');

var middlewareAdmin = require('../middlewares/admin.middleware');

var controller = require('../controllers/user.controller');
var validateUser = require('../validate/user.validate');

var router = express.Router();

router.get('/', controller.index);
router.get('/detail/:id', controller.userView);
// router.get('/create', middlewareAdmin.checkAdmin, controller.getCreate);
// router.get('/create', controller.getCreate);
router.get('/search', controller.search);
router.delete('/delete/:id', controller.delete);
// router.get('/delete/:id', middlewareAdmin.checkAdmin, controller.delete);

// router.post('/create', validateUser.postCreate, controller.postCreate);
router.post('/create', controller.postCreate);

router.get('/update/:id', controller.getUpdate);
router.post('/update/:id', controller.postUpdate);



module.exports = router;