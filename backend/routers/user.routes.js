const { Router } = require('express');
const router = Router();
const { getUser, updateUser } = require('../controllers/user.controller')

router.route('/:wallet')
    .get(getUser)
    .patch(updateUser)

module.exports = router;
