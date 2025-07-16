import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { quizzes } from './quizzes';
import Navbar from '../components/Navbar';

const Quiz = () => {
  const { topic } = useParams();
  const quiz = quizzes[topic];
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl">No quiz found for this topic.</div>
        </div>
      </div>
    );
  }

  const handleChange = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    let score = 0;
    quiz.forEach((q, idx) => {
      if (q.type === 'true-false' || q.type === 'multiple-choice') {
        if (answers[idx] === q.correctAnswer) score++;
      } else if (q.type === 'short-answer') {
        if (
          typeof answers[idx] === 'string' &&
          answers[idx].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()
        ) score++;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 text-white flex flex-col font-sans">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-8 mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">{topic} Quiz</h2>
          <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
            {quiz.map((q, idx) => (
              <div key={idx} className="mb-8">
                <div className="mb-2 font-semibold">Q{idx + 1}. {q.question}</div>
                {q.type === 'multiple-choice' && (
                  <div className="space-y-2">
                    {q.options.map((opt, oidx) => (
                      <label key={oidx} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          value={opt}
                          disabled={submitted}
                          checked={answers[idx] === opt}
                          onChange={() => handleChange(idx, opt)}
                          className="accent-pink-600"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                )}
                {q.type === 'true-false' && (
                  <div className="space-x-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`q${idx}`}
                        value="true"
                        disabled={submitted}
                        checked={answers[idx] === true}
                        onChange={() => handleChange(idx, true)}
                        className="accent-pink-600"
                      />
                      True
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`q${idx}`}
                        value="false"
                        disabled={submitted}
                        checked={answers[idx] === false}
                        onChange={() => handleChange(idx, false)}
                        className="accent-pink-600"
                      />
                      False
                    </label>
                  </div>
                )}
                {q.type === 'short-answer' && (
                  <input
                    type="text"
                    className="mt-2 w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-600 text-white"
                    value={answers[idx] || ''}
                    disabled={submitted}
                    onChange={e => handleChange(idx, e.target.value)}
                    placeholder="Your answer"
                  />
                )}
                {submitted && (
                  <div className={`mt-2 text-sm ${
                    (q.type === 'short-answer'
                      ? (answers[idx] && answers[idx].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase())
                      : answers[idx] === q.correctAnswer)
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}>
                    {answers[idx] === undefined || answers[idx] === ''
                      ? 'No answer given.'
                      : (q.type === 'short-answer'
                        ? (answers[idx].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase() ? 'Correct!' : 'Incorrect.')
                        : (answers[idx] === q.correctAnswer ? 'Correct!' : 'Incorrect.'))}
                    <span className="block text-slate-300 mt-1">{q.explanation}</span>
                  </div>
                )}
              </div>
            ))}
            {!submitted && (
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
              >
                Submit Quiz
              </button>
            )}
            {submitted && (
              <div className="text-center mt-6 text-xl font-semibold">
                Your Score: {getScore()} / {quiz.length}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quiz; 