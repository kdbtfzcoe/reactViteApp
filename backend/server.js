// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow only your frontend origin
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
}));
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const talentRoute = require('./routes/talent');
app.use('/api/talent', talentRoute); // Use the talent route

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

/*
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})