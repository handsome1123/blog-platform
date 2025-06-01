const mongoose = require('mongoose');

const Post1Schema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['Blog', 'Video'], default: 'Blog' },
  slug: { type: String, unique: true },
  image: { type: String, default: '' },
  videoUrl: { type: String, default: '' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// Auto-generate slug from title if missing
Post1Schema.pre('validate', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  next();
});

module.exports = mongoose.model('Post1', Post1Schema);
