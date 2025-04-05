// routes/user.js
const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/userController');

// Route setup (GET /api/user/profile)
router.get('/profile', getProfile);

module.exports = router;
