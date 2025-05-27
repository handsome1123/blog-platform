const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// const upload = require('../middleware/upload'); // for image uploads
// const auth = require('../middleware/auth');     // for protected routes

// Public - Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Public - Get One Post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "username");
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// // Protected - Create Post
// router.post("/", auth, upload.single("image"), async (req, res) => {
//   const { title, content } = req.body;
//   const image = req.file ? `/uploads/${req.file.filename}` : "";

//   const post = new Post({
//     title,
//     content,
//     image,
//     author: req.user.userId,
//   });

//   await post.save();
//   res.json(post);
// });

// // Protected - Update Post
// router.put("/:id", auth, async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (post.author.toString() !== req.user.userId) return res.sendStatus(403);
//   post.title = req.body.title;
//   post.content = req.body.content;
//   await post.save();
//   res.json(post);
// });

module.exports = router;