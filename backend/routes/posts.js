const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const User = require('../models/User');
const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}

// router.post('/', auth, async (req, res) => {
//   const post = new Post({ ...req.body, author: req.user.userId });
//   await post.save();
//   res.json(post);
// });

router.post("/", auth, upload.single("image"), async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : "";

  const post = new Post({
    title,
    content,
    image,
    author: req.user.userId,
  });

  await post.save();
  res.json(post);
});




router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'username');
  res.json(post);
});

router.put('/:id', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user.userId) return res.sendStatus(403);
  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.json(post);
});

router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user.userId) return res.sendStatus(403);
  await post.deleteOne();
  res.json({ message: "Deleted" });
});

module.exports = router;
