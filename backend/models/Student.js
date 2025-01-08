const mongoose = require('mongoose');

// Define the schema for the student
const studentSchema = mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true, // Ensures the registration number is unique
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ['IT', 'CSE', 'ECE', 'EEE', 'CSM', 'AIDS', 'AIML', 'MECH'],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the model from the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
