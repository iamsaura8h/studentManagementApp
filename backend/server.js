const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const studentRoutes = require('./routes/studentRoutes');

// Middleware to parse JSON
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/students', studentRoutes);

const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} and port:${PORT}`);
});


