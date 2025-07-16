import Features from './pages/Features'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Roadmap from './pages/Roadmap'
import CourseLibrary from './pages/CourseLibrary'
import { Routes, Route } from 'react-router-dom'
import AIChat from './pages/AIChat'
import Quiz from './pages/Quiz'
import QuizzesPage from './pages/QuizzesPage'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/roadmap/:name" element={<Roadmap />} />
        <Route path="/library" element={<CourseLibrary />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
      </Routes>
    </div>
  )
}

export default App
