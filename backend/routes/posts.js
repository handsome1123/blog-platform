const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

const multer = require('multer');
const path = require('path');

// === Multer Setup ===
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// === Auth Middleware ===
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    res.status(403).json({ error: 'Invalid token' });
  }
}

// === GET all posts ===
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (err) {
    console.error('GET /posts error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// === GET single post by ID ===
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log("GET /posts/:id with ID:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID format' });
  }

  try {
    const post = await Post.findById(id).populate('author', 'username');
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (err) {
    console.error('GET /posts/:id error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// === POST create a new post ===
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, content, description, type, videoUrl } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    const post = new Post({
      title,
      content,
      description,
      type: type || 'Blog',
      videoUrl: videoUrl || '',
      image,
      author: req.user.userId,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('POST /posts error:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// === DELETE post ===
router.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID format' });
  }

  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await post.deleteOne();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    console.error('DELETE /posts/:id error:', err);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;
