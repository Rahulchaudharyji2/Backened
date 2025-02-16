const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary'); // Import the Cloudinary config

// Upload image route
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    return res.json({ imageUrl: req.file.path }); // Cloudinary provides a secure URL
  } catch (error) {
    return res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
