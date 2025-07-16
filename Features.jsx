import React from "react";
import { motion } from "framer-motion";
import { SquareChartGantt , BotMessageSquare, BarChart, BookOpenCheck, UserCheck, Star } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const features = [
	{
		icon: <SquareChartGantt className="w-8 h-8 text-indigo-500" />,
		title: "Personalised Roadmaps",
		desc: "Create personalized learning roadmaps instantly for any topic",
	},
	{
		icon: <BotMessageSquare className="w-8 h-8 text-indigo-500" />,
		title: "AI Mentor Chat",
		desc: "Ask doubts anytime and get reliable answers from your AI guide.",
	},
	{
		icon: <BarChart className="w-8 h-8 text-indigo-500" />,
		title: "Skill Progress Tracker",
		desc: "Visualize your learning journey and skill growth with powerful analytics.",
	},
	{
		icon: <BookOpenCheck className="w-8 h-8 text-indigo-500" />,
		title: "Real-Time Quizzes",
		desc: "Get fresh quiz questions on every topic you're learning.",
	},
	{
		icon: <Star className="w-8 h-8 text-indigo-500" />,
		title: "Smart Recommendations",
		desc: "Get the next best module, reading, or project based on history.",
	},
	{
		icon: <UserCheck className="w-8 h-8 text-indigo-500" />,
		title: "User Friendly",
		desc: "SkillBuddy offers smooth, intuitive interfaces that are easy to use with just a few clicks.",
	},
];

const Features = () => {
	return (
		<div className="bg-black text-white py-20 px-6 sm:px-12 font-sans relative overflow-hidden">
			{/* RGB Tech Background */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute w-full h-full bg-[radial-gradient(circle,_rgba(255,0,150,0.2)_0%,_rgba(0,204,255,0.1)_70%)] animate-pulse blur-3xl mix-blend-screen" />
				<div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-soft-light" />
			</div>

			{/* Techy Banner */}
			<div className="flex justify-center mb-12">
				<img
					src="/banner.png"
					alt="SkillBuddy Banner"
					className="w-full max-w-5xl h-auto shadow-lg object-cover cursor-pointer transition-transform duration-300 hover:scale-105 rounded-xl"
				/>
			</div>

			{/* Hero Section */}
			<div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
				<h2 className="text-4xl font-bold mb-4 text-white">Our Features</h2>
				<p className="text-lg text-gray-400">
					Explore the core capabilities that make SkillBuddy your ultimate AI-powered learning companion.
				</p>
			</div>

			{/* Features Grid */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
				{features.map((f, idx) => (
					<motion.div
						key={idx}
						className="bg-[#1a1a1a] text-white rounded-xl p-6 shadow-lg border border-indigo-800/20 hover:shadow-xl hover:border-pink-500 transition"
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.4, delay: idx * 0.1 }}
					>
						<div className="mb-4">{f.icon}</div>
						<h3 className="text-xl font-semibold mb-2">{f.title}</h3>
						<p className="text-sm text-gray-300">{f.desc}</p>
						<button className="mt-4 text-sm text-indigo-400 font-medium hover:underline">
							Try Feature →
						</button>
					</motion.div>
				))}
			</div>

			{/* CTA Section */}
			<div className="text-center mt-24 relative z-10">
				<h3 className="text-2xl font-semibold mb-4 text-white">Ready to level up?</h3>
				<p className="text-gray-400 mb-6">
					Sign up and let SkillBuddy personalize your learning journey today.
				</p>
				<a
					href="/signup"
					className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
				>
					Get Started
				</a>
			</div>
		</div>
	);
};

export default Features;