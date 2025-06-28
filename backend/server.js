const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const path = require("path");


const app = express();
app.use(cors({ origin: 'https://cantwait2say.vercel.app/' }));
app.use(express.json());
// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);

const homepageRoutes = require('./routes/homepage');
app.use('/api/homepage', homepageRoutes);


app.get('/', (req, res) => res.send("Blog API running"));

app.listen(5000, () => console.log("Server running on port 5000"));
