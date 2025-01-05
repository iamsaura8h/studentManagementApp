const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

// GET all students route
router.get('/', async (req, res) => {
    try {
      const students = await Student.find(); // Fetch all students from the database
      res.json(students); // Send the list of students as a response
    } catch (error) {
      res.status(500).json({ message: "Error retrieving students" });
    }
  });

// Route to create a new student
router.post('/add', async (req, res) => {
  const { registrationNumber, name, department, year, gender } = req.body;

  try {
    const newStudent = new Student({
      registrationNumber,
      name,
      department,
      year,
      gender,
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding student' });
  }
});


module.exports = router;
