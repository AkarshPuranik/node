const router = require('express') .Router();

const UserController = require("../user.controller");

router.post('/registration' ,UserController.register);

module. exports = router;