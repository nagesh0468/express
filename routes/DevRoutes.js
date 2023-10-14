const express = require('express');

const {
    getAllUsers,
    getAllStars,
    deleteAllUsers,
    deleteAllStarts,
} = require('../controller/DevController');
const router = express.Router();

router.get('/user', getAllUsers);
router.get('/star', getAllStars);

router.delete('users', deleteAllUsers)
router.delete('starts', deleteAllStarts)

module.exports = router;