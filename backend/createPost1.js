require('dotenv').config();
const mongoose = require('mongoose');
const Post1 = require('./models/Post1'); // Make sure the path is correct

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const someUserId = new mongoose.Types.ObjectId(); // Replace with real user ID

    const newPost = new Post1({
      title: "My First Post",
      description: "Description here",
      content: "Content here",
      author: someUserId,
    });

    const savedPost = await newPost.save();
    console.log('Post saved:', savedPost);
  } catch (err) {
    console.error('Error saving post:', err);
  } finally {
    await mongoose.disconnect();
  }
}

main();
