// middleware/verifyAdmin.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ msg: "Access denied" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
