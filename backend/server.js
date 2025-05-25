const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const multer = require("multer");
const path = require("path");


const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/uploads", express.static("uploads"));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const postRoutes = require('./routes/posts');
app.use('/api/posts', postRoutes);


app.get('/', (req, res) => res.send("Blog API running"));

app.listen(5000, () => console.log("Server running on port 5000"));
