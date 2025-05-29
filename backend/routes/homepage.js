const express = require('express');
const router = express.Router();
const HomepageContent = require('../models/HomepageContent');

// GET latest homepage content
router.get('/', async (req, res) => {
  const content = await HomepageContent.findOne();
  res.json(content);
});

// POST (update or create) homepage content
router.post('/', async (req, res) => {
  const data = req.body;
  let content = await HomepageContent.findOne();
  if (content) {
    Object.assign(content, data);
    await content.save();
  } else {
    content = await HomepageContent.create(data);
  }
  res.json({ success: true, content });
});

module.exports = router;
