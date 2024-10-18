// Create web server

// Import modules
const express = require('express'); 
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.getComments);
router.get('/create', commentController.createComment);
