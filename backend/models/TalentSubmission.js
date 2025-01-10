// models/TalentSubmission.js
const mongoose = require('mongoose');

const talentSubmissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true },
    talent: { type: String, required: true },
});

module.exports = mongoose.model('TalentSubmission', talentSubmissionSchema);