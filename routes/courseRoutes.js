const express = require("express");
const router = express.Router();

// Dummy course data
let courses = [
  { id: 1, title: "Web Development" },
  { id: 2, title: "Database Systems" }
];

// READ all courses
router.get("/", (req, res) => {
  res.json(courses);
});

// CREATE course
router.post("/", (req, res) => {
  const newCourse = { id: courses.length + 1, ...req.body };
  courses.push(newCourse);
  res.json(newCourse);
});

// UPDATE course
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  course.title = req.body.title || course.title;
  res.json(course);
});

// DELETE course
router.delete("/:id", (req, res) => {
  courses = courses.filter(c => c.id !== parseInt(req.params.id));
  res.json({ message: "Course deleted" });
});

module.exports = router;
