const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true }, // Use course name as ID
  completedLessons: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema); 