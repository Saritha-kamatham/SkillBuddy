import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({});
    navigate("/");
  };
  useEffect(() => {
    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem('user') || '{}'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);
  return (
    <nav className="bg-gray-200 border-b border-gray-200 shadow-sm px-3 py-2 flex justify-between items-center relative w-full">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src="/Logo.png" alt="SkillBuddy Logo" className="h-20 w-20 object-contain" />
        </Link>
      </div>
      {/* Navigation Items */}
      <ul className="flex gap-8 font-medium text-gray-900">
        <li className="hover:text-black cursor-pointer">
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>
        <li className="hover:text-black cursor-pointer">
          <Link to="/library">📚 Courses</Link>
        </li>
        <li className="hover:text-black cursor-pointer">
          <Link to="/quizzes">📈 Quizzes</Link>
        </li>
        <li className="hover:text-black cursor-pointer">
          <Link to="/ai-chat">🤖 AI Buddy</Link>
        </li>
      </ul>
      {/* Logout Button */}
      <div className="flex items-center gap-4">
        {user.username && (
          <span className="text-gray-700 font-medium mr-2">Welcome, {user.username}</span>
        )}
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
