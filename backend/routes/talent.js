// routes/talent.js
const express = require('express');
const router = express.Router();
const TalentSubmission = require('../models/TalentSubmission'); // Ensure this path is correct

// Create a new talent submission
router.post('/', async (req, res) => {
    const newSubmission = new TalentSubmission(req.body);
    try {
        const savedSubmission = await newSubmission.save();
        res.status(201).json(savedSubmission);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: "Error saving submission" });
    }
});

module.exports = router;