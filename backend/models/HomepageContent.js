const mongoose = require('mongoose');

const HomepageContentSchema = new mongoose.Schema({
  heroTitle: String,
  heroSubtitle: String,
  latestVideoUrl: String,
  contentPreview: {
    title: String,
    summary: String
  }
});

module.exports = mongoose.model('HomepageContent', HomepageContentSchema);
