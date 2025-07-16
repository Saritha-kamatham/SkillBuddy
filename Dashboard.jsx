import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBrain, FaChartLine, FaRobot, FaUsers, FaStar, FaBook, FaClock, FaBell } from "react-icons/fa";
import { SiReact, SiJavascript, SiPython, SiHtml5, SiCss3, SiMongodb, SiNodedotjs } from "react-icons/si";
import { GiGraduateCap, GiBookshelf } from "react-icons/gi";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { courses } from "./CourseLibrary";
import { roadmaps } from "./roadmaps";

const PanelCard = ({ title, icon, description, delay = 0, onClick }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    onClick={onClick}
    tabIndex={0}
    role="button"
    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onClick && onClick(); }}
  >
    <div className="text-2xl text-indigo-500 mb-2 cursor-pointer">{icon}</div>
    <h4 className="font-semibold text-lg text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </motion.div>
);

const FeatureStripItem = ({ title, icon, delay = 0, onClick }) => (
  <motion.div
    className="flex-1 min-w-0 bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center gap-3 hover:shadow-md hover:bg-white transition cursor-pointer"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    onClick={onClick}
    tabIndex={0}
    role="button"
    onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onClick && onClick(); }}
  >
    <div className="text-indigo-600 text-xl">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{title}</span>
  </motion.div>
);

const FloatingIcon = ({ icon, style, className }) => (
  <div className={`absolute pointer-events-none opacity-90 z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] ${className}`} style={style}>
    {icon}
  </div>
);

const FloatingShape = ({ style, className }) => (
  <div className={`absolute pointer-events-none ${className}`} style={style} />
);

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    // Fetch all progress for the user
    const fetchProgress = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://server-210v.onrender.com/api/progress', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        setProgressList(Array.isArray(data) ? data : []);
      } catch {
        setProgressList([]);
      }
      setLoading(false);
    };
    fetchProgress();
    // Listen for progress-updated event
    const handleProgressUpdated = () => fetchProgress();
    window.addEventListener('progress-updated', handleProgressUpdated);
    return () => {
      window.removeEventListener('progress-updated', handleProgressUpdated);
    };
  }, [navigate, token]);
  console.log('progressList:', progressList);
  // Find the next upcoming topic across all started courses
  let globalUpcoming = 'All courses complete!';
  let globalCourse = null;
  let minRemaining = Infinity;
  progressList.forEach(progress => {
    const course = courses.find(c => c.title === progress.course);
    if (!course) return;
    const roadmapKey = Object.keys(roadmaps).find(
      key => key.trim().toLowerCase() === course.title.trim().toLowerCase()
    );
    if (roadmapKey) {
      const steps = roadmaps[roadmapKey];
      const completedSet = new Set(
        (progress.completedLessons || []).map(title => title.trim().toLowerCase())
      );
      const nextStep = steps.find(
        step => !completedSet.has(step.title.trim().toLowerCase())
      );
      const remaining = steps.length - (progress.completedLessons ? progress.completedLessons.length : 0);
      if (nextStep && remaining < minRemaining) {
        globalUpcoming = nextStep.title;
        globalCourse = course;
        minRemaining = remaining;
      }
    }
  });
  // Build next steps checklist for the globalCourse
  let nextSteps = [];
  if (globalCourse) {
    const roadmapKey = Object.keys(roadmaps).find(
      key => key.trim().toLowerCase() === globalCourse.title.trim().toLowerCase()
    );
    if (roadmapKey) {
      const steps = roadmaps[roadmapKey];
      const progress = progressList.find(p => p.course === globalCourse.title);
      const completedSet = new Set(
        (progress?.completedLessons || []).map(title => title.trim().toLowerCase())
      );
      nextSteps = steps.filter(step => !completedSet.has(step.title.trim().toLowerCase())).slice(0, 3);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 relative overflow-hidden font-sans">
      {/* Floating Background Icons */}
      <FloatingIcon icon={<SiReact />} style={{ top: '20%', left: '12%', fontSize: '4.5rem', color: '#61dafb', opacity: 0.7, animation: 'float1 8s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiJavascript />} style={{ top: '22%', right: '7%', fontSize: '3.6rem', color: '#f7df1e', opacity: 0.7, animation: 'float2 7s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiPython />} style={{ bottom: '18%', left: '16%', fontSize: '3.9rem', color: '#3776ab', opacity: 0.7, animation: 'float3 9s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiHtml5 />} style={{ top: '5%', left: '75%', fontSize: '3.3rem', color: '#e34c26', opacity: 0.7, animation: 'float4 10s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiCss3 />} style={{ bottom: '30%', right: '15%', fontSize: '3.5rem', color: '#264de4', opacity: 0.7, animation: 'float5 8s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiMongodb />} style={{ top: '60%', left: '5%', fontSize: '3.4rem', color: '#47a248', opacity: 0.7, animation: 'float6 11s ease-in-out infinite' }} />
      <FloatingIcon icon={<SiNodedotjs />} style={{ bottom: '12%', right: '3%', fontSize: '4.1rem', color: '#8cc84b', opacity: 0.7, animation: 'float7 9s ease-in-out infinite' }} />
      
      <main className="p-4 relative z-10">
        <h2 className="text-5xl tracking-tight font-bold mt-5 mb-10 flex items-center gap-2 font-sans bg-gradient-to-r from-pink-500 to-pink-100 bg-clip-text text-transparent" style={{letterSpacing:'-0.02em'}}>
          <span>Welcome back, {user.username ? user.username : 'Learner'}!</span>
          <span className="animate-wave">👋</span>
        </h2>
        <div className="h-8"></div>
        {/* Progress for started courses only */}
        <div className="mb-12 flex flex-col items-center w-full max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Your Course Progress</h3>
          {loading ? (
            <div className="text-gray-300">Loading progress...</div>
          ) : progressList.length === 0 ? (
            <div className="text-gray-300">You haven't started any courses yet.</div>
          ) : (
            <div className="space-y-6 w-full">
              {progressList.map((progress, idx) => {
                const course = courses.find(c => c.title === progress.course);
                if (!course) return null;
                const completed = progress.completedLessons ? progress.completedLessons.length : 0;
                // Use globalUpcoming for the matching course, otherwise show 'Course Complete!'
                const upcoming = (globalCourse && globalCourse.title === course.title) ? globalUpcoming : 'Course Complete!';
                return (
                  <div key={idx} className="bg-white/80 rounded-xl shadow p-4 mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="font-semibold text-gray-800 block mb-1">{course.title}</span>
                      <div className="text-xs text-gray-600 mb-2">{completed} lessons completed</div>
                      <div className="text-xs text-pink-600 font-semibold">Upcoming Topic: {upcoming}</div>
                    </div>
                    <button
                      className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-all text-sm"
                      onClick={() => navigate(`/roadmap/${encodeURIComponent(course.title)}`)}
                    >
                      Continue
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/* Command Center */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <PanelCard title="AI Mentor" icon={<FaRobot />} description="Today's Tip: Focus on recursion problems." delay={0.1} onClick={() => navigate('/ai-chat')} />
          <PanelCard title="Quiz/Challenges" icon={<FaBrain />} description="Test your skills with today's quiz or coding challenge!" delay={0.2} onClick={() => navigate('/quizzes')} />
          <PanelCard title="All Courses" icon={<FaChartLine />} description="Explore all our courses and start learning today!" delay={0.3} onClick={() => navigate('/library')} />
          <PanelCard
            title="Upcoming Topic"
            icon={<FaBook />}
            description={globalCourse ? `Next: ${globalUpcoming} (${globalCourse.title})` : globalUpcoming}
            delay={0.4}
            onClick={() => globalCourse ? navigate(`/roadmap/${encodeURIComponent(globalCourse.title)}`) : null}
          />
        </div>
        
        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-pink-400 to-violet-400 blur-lg opacity-60 animate-border-glow z-0" />
          <div className="bg-white/60 backdrop-blur-xl border border-pink-200 rounded-2xl shadow-2xl p-6 relative z-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 font-sans">Next Steps</h3>
            {globalCourse && nextSteps.length > 0 ? (
              <ul className="space-y-3">
                {nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <input type="checkbox" className="accent-pink-500 w-5 h-5" disabled />
                    <span className="text-gray-800 font-medium">{step.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-blue-700 font-semibold">You're all caught up! 🎉</div>
            )}
          </div>
        </div>
        {/* Horizontal Feature Strip */}
        <h3 className="text-2xl font-semibold text-white mb-6 font-sans">Explore More</h3>
        <div className="w-full flex flex-nowrap gap-x-4">
          <FeatureStripItem icon={<FaBook />} title="Learning Library" delay={0.1} onClick={() => navigate('/library')} />
          <FeatureStripItem icon={<FaUserGraduate />} title="My Courses" delay={0.2} onClick={() => navigate('/library')} />
          <FeatureStripItem icon={<FaRobot />} title="AI Mentor" delay={0.5} onClick={() => navigate('/ai-chat')} />
          <FeatureStripItem icon={<FaBrain />} title="Skill Challenges" delay={0.6} onClick={() => navigate('/quizzes')} />
        </div>
      </main>
      <style>{`
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientMove 3s linear infinite alternate;
      }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .animate-wave {
        display: inline-block;
        animation: wave 1.2s infinite linear alternate;
      }
      @keyframes wave {
        0% { transform: rotate(-10deg); }
        100% { transform: rotate(10deg); }
      }
      .animate-fade-in {
        animation: fadeIn 0.2s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
      @keyframes float2 { 0% { transform: translateY(0); } 50% { transform: translateY(25px); } 100% { transform: translateY(0); } }
      @keyframes float3 { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
      @keyframes float4 { 0% { transform: translateY(0); } 50% { transform: translateY(35px); } 100% { transform: translateY(0); } }
      @keyframes float5 { 0% { transform: translateY(0); } 50% { transform: translateY(-25px); } 100% { transform: translateY(0); } }
      @keyframes float6 { 0% { transform: translateY(0); } 50% { transform: translateY(30px); } 100% { transform: translateY(0); } }
      @keyframes float7 { 0% { transform: translateY(0); } 50% { transform: translateY(-35px); } 100% { transform: translateY(0); } }
      @keyframes float8 { 0% { transform: translateY(0); } 50% { transform: translateY(20px); } 100% { transform: translateY(0); } }
      @keyframes float9 { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
      @keyframes floatShape1 { 0% { transform: translateY(0); } 50% { transform: translateY(-40px); } 100% { transform: translateY(0); } }
      @keyframes floatShape2 { 0% { transform: translateY(0); } 50% { transform: translateY(30px); } 100% { transform: translateY(0); } }
      @keyframes floatShape3 { 0% { transform: translateY(0); } 50% { transform: translateY(-25px); } 100% { transform: translateY(0); } }
      .animate-border-glow {
        animation: borderGlow 3s linear infinite alternate;
      }
      @keyframes borderGlow {
        0% { opacity: 0.4; filter: blur(8px); }
        100% { opacity: 0.8; filter: blur(16px); }
      }
    `}</style>
    </div>
  );
};

export default Dashboard;
