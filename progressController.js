const Progress = require('../models/Progress');

// Get progress for a user in a course
exports.getProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.userId;
    const progress = await Progress.findOne({ user: userId, course: courseId });
    res.json(progress || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update progress (e.g., mark lesson complete)
exports.updateProgress = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.userId;
    const { completedLessons} = req.body;

    let progress = await Progress.findOne({ user: userId, course: courseId });
    if (!progress) {
      progress = new Progress({ user: userId, course: courseId, completedLessons: [],});
    }
    if (completedLessons) progress.completedLessons = completedLessons;

    await progress.save();
    res.json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all progress records for a user
exports.getAllProgress = async (req, res) => {
  try {
    const userId = req.user.userId;
    const progressList = await Progress.find({ user: userId });
    res.json(progressList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 