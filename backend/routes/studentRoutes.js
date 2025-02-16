const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: "Backend is connected!" });
});

// GET all students route
router.get('/', async (req, res) => {
    try {
      const students = await Student.find(); // Fetch all students from the database
      res.json(students); // Send the list of students as a response
    } catch (error) {
      res.status(500).json({ message: "Error retrieving students" });
    }
  });

// GET route to search for students by name
router.get('/searchByName/:name', async (req, res) => {
    try {
      const { name } = req.params; // Get name from URL
      const students = await Student.find({ name: new RegExp(name, 'i') }); // Case-insensitive search
  
      if (students.length === 0) {
        return res.status(404).json({ message: "No students found with this name" });
      }
  
      res.json({ message: "Students retrieved successfully", students });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving students" });
    }
  });
  

  
// PUT route to update a student by ID

// router.put('/:id', async (req, res) => {
//     try {
//       const { id } = req.params; // Get the student's ID from the URL params
//       const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true }); // Update student in the database
  
//       if (!updatedStudent) {
//         return res.status(404).json({ message: "Student not found" });
//       }
  
//       res.json(updatedStudent); // Send back the updated student
//     } catch (error) {
//       res.status(500).json({ message: "Error updating student" });
//     }
//   });


// PUT route to update a student by registration number
router.put('/updateByRegNumber/:registrationNumber', async (req, res) => {
    try {
      const { registrationNumber } = req.params; // Get registrationNumber from URL
      const updatedStudent = await Student.findOneAndUpdate(
        { registrationNumber }, // Match the registration number
        req.body, // Update with the provided data
        { new: true } // Return the updated document
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.json(updatedStudent); // Send back the updated student
    } catch (error) {
      res.status(500).json({ message: "Error updating student" });
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

// DELETE route to remove a student by registration number
router.delete('/delete/:registrationNumber', async (req, res) => {
    try {
      const { registrationNumber } = req.params; // Get registrationNumber from URL
      const deletedStudent = await Student.findOneAndDelete({ registrationNumber }); // Find and delete the student
  
      if (!deletedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.json({ message: "Student deleted successfully", deletedStudent }); // Send success message
    } catch (error) {
      res.status(500).json({ message: "Error deleting student" });
    }
  });
  

module.exports = router;
