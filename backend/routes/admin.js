const express = require('express');
const router = express.Router();
const verifyTokenAndAdmin = require('../middleware/verifyTokenAndAdmin');

router.get('/dashboard', verifyTokenAndAdmin, async (req, res) => {
  // Mocked admin dashboard stats
  res.json({
    users: 120,
    posts: 340,
    comments: 789,
    latestSignup: "2025-05-27",
  });
});




module.exports = router;
