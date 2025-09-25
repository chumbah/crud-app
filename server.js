const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Import routes
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

// Use routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the CRUD API");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
