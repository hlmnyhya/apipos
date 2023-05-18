const express = require("express");
const router = express.Router();
const users = require('../controller/users')
const auth = require('../middlewares/Auth');


router.post('/register', users.register);
router.post('/login', users.login);
router.post('/logout', auth, users.logout);
router.get('/',auth, users.getUsers);
router.get('/:id',auth, users.getUser);
router.put('/:id',auth, users.update);



module.exports = router;
