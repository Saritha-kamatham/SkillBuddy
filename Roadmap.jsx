import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { roadmaps } from './roadmaps';
import { quizzes } from './quizzes';
import Navbar from '../components/Navbar';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Roadmap = () => {
  const { name } = useParams();
  const steps = roadmaps[name];
  const hasQuiz = !!quizzes[name];

  // Track completed steps in local state
  const [completed, setCompleted] = useState(() => Array(steps ? steps.length : 0).fill(false));
  const [started, setStarted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [startMsg, setStartMsg] = useState('');
  const [progressId, setProgressId] = useState(null);

  // Calculate progress percentage
  const completedCount = completed.filter(Boolean).length;
  const progressPercent = steps && steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  // Fetch progress for this course on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || !name) return;
    fetch(`https://server-210v.onrender.com/api/progress/${encodeURIComponent(name)}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data._id) {
          setStarted(true);
          setProgressId(data._id);
          // Set completed checkboxes based on backend
          if (Array.isArray(data.completedLessons)) {
            const arr = Array(steps.length).fill(false);
            data.completedLessons.forEach(lessonTitle => {
              const idx = steps.findIndex(s => s.title === lessonTitle);
              if (idx !== -1) arr[idx] = true;
            });
            setCompleted(arr);
          }
        } else {
          setStarted(false);
          setProgressId(null);
          setCompleted(Array(steps.length).fill(false));
        }
      })
      .catch(() => {
        setStarted(false);
        setProgressId(null);
        setCompleted(Array(steps.length).fill(false));
      });
  }, [name, steps]);

  // Handler for checkbox
  const handleCheck = async idx => {
    const updated = [...completed];
    updated[idx] = !updated[idx];
    setCompleted(updated);
    // Sync with backend
    const token = localStorage.getItem('token');
    const completedLessons = steps.filter((_, i) => updated[i]).map(s => s.title);
    try {
      await fetch(`https://server-210v.onrender.com/api/progress/${encodeURIComponent(name)}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completedLessons })
      });
      // Notify Dashboard to refresh (custom event)
      window.dispatchEvent(new Event('progress-updated'));
    } catch {}
  };

  // Handler for starting course
  const handleStartCourse = async () => {
    setStartLoading(true);
    setStartMsg('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`https://server-210v.onrender.com/api/progress/${encodeURIComponent(name)}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completedLessons: [] })
      });
      if (res.ok) {
        setStarted(true);
        setStartMsg('Course started!');
      } else {
        setStartMsg('Failed to start course.');
      }
    } catch {
      setStartMsg('Failed to start course.');
    }
    setStartLoading(false);
  };

  if (!steps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl">No roadmap found for this topic.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 text-white flex flex-col font-sans">
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-2 sm:px-4">
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-400/30 p-6 sm:p-10 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold mb-2 text-center bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent drop-shadow">{name} Roadmap</h1>
          {/* Start Course Button */}
          {!started && (
            <button
              className="mb-4 px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-bold shadow transition-all"
              onClick={handleStartCourse}
              disabled={startLoading}
            >
              {startLoading ? 'Starting...' : 'Start Course'}
            </button>
          )}
          {startMsg && <div className="mb-2 text-center text-sm text-pink-200">{startMsg}</div>}
          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 mt-2">
            <div className="flex items-center gap-2 text-pink-300 font-semibold text-lg">
              <FaCheckCircle className="text-pink-400" /> {steps.length} Steps
            </div>
            {hasQuiz && (
              <Link
                to={`/quiz/${encodeURIComponent(name)}`}
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all text-lg mt-2 sm:mt-0"
              >
                <FaArrowRight /> Take Quiz
              </Link>
            )}
          </div>
          {/* Progress Bar */}
          <div className="w-full flex justify-center mb-8">
            <div className="h-3 w-full max-w-md min-w-[120px] bg-pink-900/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span className="ml-4 text-pink-200 font-semibold min-w-[48px]">{progressPercent}%</span>
          </div>
          <div className="w-full space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-slate-800/90 rounded-2xl p-6 shadow flex flex-col gap-2 border-l-4 border-pink-400 relative"
              >
                <div className="absolute -left-6 top-6 flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white font-bold text-lg shadow-lg border-4 border-pink-200">{idx + 1}</div>
                <div className="flex items-center gap-3 mb-1">
                  <input
                    type="checkbox"
                    checked={completed[idx]}
                    onChange={() => handleCheck(idx)}
                    className="accent-pink-500 w-5 h-5"
                  />
                  <span className="font-bold text-2xl text-pink-200">{step.title}</span>
                </div>
                <div className="text-slate-200 mb-2">{step.description}</div>
                {step.resource && (
                  <a
                    href={step.resource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline mt-1 font-medium"
                  >
                    Official Resource
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
