var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userController = require('../controller/UserController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/all', userController.getAllUser);
router.get('/user/:id', userController.getUser);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;