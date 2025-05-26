const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String, // Full post content
  description: String, // Short summary
  type: { type: String, enum: ['Blog', 'Video'], default: 'Blog' },
  slug: { type: String, unique: true }, // e.g., "mohinga-history"
  image: String,
  videoUrl: String, // Optional: only if it's a video post
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
