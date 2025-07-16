const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const auth = require('../middleware/auth');

// Get progress for a course (user must be logged in)
router.get('/:courseId', auth, progressController.getProgress);

// Update progress for a course (user must be logged in)
router.put('/:courseId', auth, progressController.updateProgress);

// Get all progress for a user (user must be logged in)
router.get('/', auth, progressController.getAllProgress);

module.exports = router; 