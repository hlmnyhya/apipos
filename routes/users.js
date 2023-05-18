const router = require('express').Router();
const { users, refreshToken } = require('../controller');
const auth = require('../middlewares/Auth');


router.post('/register', users.register);
router.post('/login', users.login);
router.post('/logout',  users.logout);
router.get('/',auth, users.getUsers);
router.get('/:id',auth, users.getUser);
router.put('/:id', users.update);



module.exports = router;
