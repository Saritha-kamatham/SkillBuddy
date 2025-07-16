import React from 'react';
import { Link } from 'react-router-dom';
import { quizzes } from './quizzes';
import Navbar from '../components/Navbar';

const Quizzes = () => {
  const topics = Object.keys(quizzes);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 text-white flex flex-col font-sans">
      <div className="flex-1 flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Available Quizzes</h1>
        <div className="w-full max-w-2xl space-y-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl p-6 shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="font-semibold text-lg">{topic}</div>
              <Link
                to={`/quiz/${encodeURIComponent(topic)}`}
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors text-center"
              >
                Start Quiz
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes; 