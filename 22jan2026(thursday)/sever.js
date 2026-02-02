// 1. IMPORTS
const express = require("express");
const mongoose = require("mongoose");

// 2. CREATE APP
const app = express();

// 3. CONNECT TO MONGODB  ✅ ADD IT HERE
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// 4. ROUTES
app.get("/", (req, res) => {
  res.send("Server is working");
});

// 5. START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
