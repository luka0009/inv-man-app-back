const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser, getUserData, 
loginStatus, updateInfo, updatePassword,} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/userdata', protect, getUserData);
router.get('/loggedinstatus', loginStatus);
router.patch('/updateinfo', protect, updateInfo);
router.patch('/updatepassword', protect, updatePassword);

module.exports = router;