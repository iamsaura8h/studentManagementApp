const Student = require('../models/Student');

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { registrationNumber, name, department, year, gender } = req.body;
    const existingStudent = await Student.findOne({ registrationNumber });

    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this registration number already exists' });
    }

    const newStudent = new Student({ registrationNumber, name, department, year, gender });
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student' });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ message: 'Students retrieved successfully', students });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving students' });
  }
};

// Update student by registration number
const updateStudentByRegNumber = async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const updatedData = req.body;

    const updatedStudent = await Student.findOneAndUpdate(
      { registrationNumber },
      updatedData,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student updated successfully', updatedStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error updating student' });
  }
};

// Delete student by registration number
const deleteStudentByRegNumber = async (req, res) => {
  try {
    const { registrationNumber } = req.params;

    const deletedStudent = await Student.findOneAndDelete({ registrationNumber });

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully', deletedStudent });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student' });
  }
};

// Search students by name
const searchStudentByName = async (req, res) => {
  try {
    const { name } = req.params;
    const students = await Student.find({ name: new RegExp(name, 'i') });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found with this name' });
    }

    res.json({ message: 'Students retrieved successfully', students });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving students' });
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  updateStudentByRegNumber,
  deleteStudentByRegNumber,
  searchStudentByName,
};
