const express = require("express");
const router = express.Router();

// Dummy student data
let students = [
  { id: 1, name: "Alex", course: "CS" },
  { id: 2, name: "Mary", course: "IT" }
];

// READ all students
router.get("/", (req, res) => {
  res.json(students);
});

// CREATE student
router.post("/", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.json(newStudent);
});

// UPDATE student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;
  res.json(student);
});

// DELETE student
router.delete("/:id", (req, res) => {
  students = students.filter(s => s.id !== parseInt(req.params.id));
  res.json({ message: "Student deleted" });
});

module.exports = router;
