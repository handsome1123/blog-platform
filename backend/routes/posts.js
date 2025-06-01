const express = require('express');
const router = express.Router();
const multer = require("multer");
const Post = require('../models/Post');
const path = require("path");
const fs = require('fs');

// ✅ Multer setup (store uploads in /uploads folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// ✅ Allow only image and video file types
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|mp4|webm|ogg/;
  const ext = path.extname(file.originalname).toLowerCase().substring(1);
  if (allowed.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only image and video files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

/**
 * POST /api/posts
 * Create a new post with optional media (image or video).
 */
router.post('/', upload.single('media'), async (req, res) => {
  try {
    const { title, description, content, type, videoUrl } = req.body;

    if (!title || !description || !content) {
      return res.status(400).json({ error: 'Title, description, and content are required' });
    }

    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    let image = undefined;

    if (req.file && type !== 'Video') {
      image = `/uploads/${req.file.filename}`;
    }

    const newPost = new Post({
      title,
      description,
      content,
      type: type || 'Article',
      slug,
      image,
      videoUrl: type === 'Video' ? videoUrl : undefined,
      author: req.user ? req.user._id : null,
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created', post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


/**
 * GET /api/posts
 * Public: Fetch all posts
 */
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

/**
 * GET /api/posts/:id
 * Public: Fetch a single post by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "username");
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

module.exports = router;
