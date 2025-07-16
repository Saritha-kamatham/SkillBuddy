import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export const courses = [
  // --- Frontend ---
  { title: 'React Fundamentals', description: 'Start your journey with the basics of React, including components, state, and hooks.', category: 'Frontend' },
  { title: 'Advanced React Patterns', description: 'Dive deeper into React with hooks, context, render props, and performance optimizations.', category: 'Frontend' },
  { title: 'Vue.js Essentials', description: 'Get started with Vue.js and build interactive, modern web interfaces.', category: 'Frontend' },
  { title: 'Angular Crash Course', description: 'Learn the basics of Angular and build scalable single-page applications.', category: 'Frontend' },
  { title: 'Frontend with HTML & CSS', description: 'Build beautiful, responsive websites using HTML5 and modern CSS3 techniques.', category: 'Frontend' },
  { title: 'SASS & CSS Preprocessing', description: 'Write maintainable, scalable CSS using SASS and other preprocessors.', category: 'Frontend' },
  { title: 'Responsive Web Design', description: 'Create mobile-friendly, responsive layouts with modern CSS techniques.', category: 'Frontend' },
  { title: 'JavaScript Essentials', description: 'Master modern JavaScript, ES6+, and core programming concepts for web development.', category: 'Frontend' },
  { title: 'TypeScript for Developers', description: 'Add type safety to your JavaScript projects and scale confidently with TypeScript.', category: 'Frontend' },
  { title: 'Testing with Jest', description: 'Write and run unit tests for your JavaScript and React applications using Jest.', category: 'Frontend' },
  { title: 'GraphQL Basics', description: 'Query and mutate data efficiently with GraphQL and Apollo Client.', category: 'Frontend' },
  { title: 'Firebase for Web Apps', description: 'Add authentication, real-time databases, and hosting to your apps with Firebase.', category: 'Frontend' },
  { title: 'Svelte for Beginners', description: 'Learn the basics of Svelte and build fast, reactive web apps.', category: 'Frontend' },
  { title: 'Next.js in Practice', description: 'Build production-ready React apps with Next.js, including SSR and API routes.', category: 'Frontend' },

  // --- Backend ---
  { title: 'Node.js & Express', description: 'Learn backend development with Node.js, Express, and RESTful APIs.', category: 'Backend' },
  { title: 'Django Web Development', description: 'Create robust web applications using the Django framework and Python.', category: 'Backend' },
  { title: 'RESTful API Design', description: 'Design and implement RESTful APIs for modern web and mobile applications.', category: 'Backend' },
  { title: 'MongoDB & NoSQL Databases', description: 'Master NoSQL concepts and build scalable databases with MongoDB.', category: 'Backend' },
  { title: 'Fullstack MERN Bootcamp', description: 'Build fullstack applications using MongoDB, Express, React, and Node.js.', category: 'Backend' },
  { title: 'PostgreSQL & Relational Databases', description: 'Design and manage relational databases with PostgreSQL.', category: 'Backend' },
  { title: 'Flask for Web Apps', description: 'Build lightweight web applications using Flask and Python.', category: 'Backend' },
  { title: 'Ruby on Rails', description: 'Develop web applications rapidly with Ruby on Rails.', category: 'Backend' },
  { title: 'Spring Boot for Java', description: 'Create enterprise-grade backend services with Spring Boot.', category: 'Backend' },
  { title: 'API Security & OAuth', description: 'Secure your APIs with OAuth, JWT, and best practices.', category: 'Backend' },
  { title: 'FastAPI Essentials', description: 'Develop high-performance APIs with Python FastAPI.', category: 'Backend' },
  { title: 'GraphQL Server with Apollo', description: 'Build robust GraphQL APIs using Apollo Server.', category: 'Backend' },

  // --- Data Science & AI ---
  { title: 'Python for Beginners', description: 'Learn Python programming from scratch, including syntax, data structures, and OOP.', category: 'Data Science & AI' },
  { title: 'Data Science with Python', description: 'Analyze data, visualize results, and build machine learning models using Python.', category: 'Data Science & AI' },
  { title: 'Machine Learning Basics', description: 'Understand the fundamentals of machine learning and build your first models.', category: 'Data Science & AI' },
  { title: 'Deep Learning with TensorFlow', description: 'Build neural networks and deep learning models using TensorFlow.', category: 'Data Science & AI' },
  { title: 'Natural Language Processing', description: 'Work with text data and build NLP models for real-world tasks.', category: 'Data Science & AI' },
  { title: 'Data Visualization with D3.js', description: 'Create interactive data visualizations using D3.js.', category: 'Data Science & AI' },
  { title: 'Statistics for Data Science', description: 'Master probability, statistics, and data analysis for data science.', category: 'Data Science & AI' },
  { title: 'Big Data with Hadoop', description: 'Process and analyze large datasets using Hadoop and MapReduce.', category: 'Data Science & AI' },
  { title: 'Computer Vision with OpenCV', description: 'Build image processing and computer vision applications.', category: 'Data Science & AI' },
  { title: 'Reinforcement Learning Basics', description: 'Understand the fundamentals of reinforcement learning and build simple agents.', category: 'Data Science & AI' },
  { title: 'Data Engineering with Airflow', description: 'Automate and orchestrate data pipelines using Apache Airflow.', category: 'Data Science & AI' },

  // --- DevOps & Cloud ---
  { title: 'DevOps Fundamentals', description: 'Learn CI/CD, Docker, Kubernetes, and cloud deployment best practices.', category: 'DevOps & Cloud' },
  { title: 'Cloud Computing with AWS', description: 'Deploy and manage scalable applications using Amazon Web Services.', category: 'DevOps & Cloud' },
  { title: 'Azure Cloud Basics', description: 'Get started with Microsoft Azure cloud services.', category: 'DevOps & Cloud' },
  { title: 'Google Cloud Platform', description: 'Deploy and manage apps on Google Cloud Platform.', category: 'DevOps & Cloud' },
  { title: 'Docker & Containerization', description: 'Package and deploy applications using Docker containers.', category: 'DevOps & Cloud' },
  { title: 'Kubernetes Orchestration', description: 'Automate deployment, scaling, and management of containerized apps.', category: 'DevOps & Cloud' },
  { title: 'Terraform Infrastructure as Code', description: 'Provision and manage cloud infrastructure with Terraform.', category: 'DevOps & Cloud' },
  { title: 'Serverless Architectures', description: 'Build scalable apps with serverless technologies like AWS Lambda.', category: 'DevOps & Cloud' },
  { title: 'CI/CD with GitHub Actions', description: 'Automate your software workflows with GitHub Actions.', category: 'DevOps & Cloud' },
  { title: 'AWS Lambda Deep Dive', description: 'Master serverless computing with AWS Lambda.', category: 'DevOps & Cloud' },

  // --- Mobile Development ---
  { title: 'Swift for iOS', description: 'Develop iOS apps using Swift and Xcode, from basics to advanced topics.', category: 'Mobile Development' },
  { title: 'Kotlin for Android', description: 'Build modern Android apps using Kotlin and Jetpack libraries.', category: 'Mobile Development' },
  { title: 'React Native', description: 'Create cross-platform mobile apps using React Native.', category: 'Mobile Development' },
  { title: 'Flutter & Dart', description: 'Build beautiful native apps for iOS and Android with Flutter.', category: 'Mobile Development' },
  { title: 'Mobile UI/UX Design', description: 'Design intuitive and engaging mobile app interfaces.', category: 'Mobile Development' },
  { title: 'Ionic Framework Crash Course', description: 'Build cross-platform mobile apps using the Ionic framework.', category: 'Mobile Development' },

  // --- Programming Languages ---
  { title: 'C++ Programming', description: 'Get started with C++ syntax, OOP, and algorithms for competitive programming.', category: 'Programming Languages' },
  { title: 'Java Programming', description: 'Master Java basics, OOP, and build cross-platform applications.', category: 'Programming Languages' },
  { title: 'Go Language Basics', description: 'Learn the Go programming language for scalable backend services.', category: 'Programming Languages' },
  { title: 'Rust for Beginners', description: 'Get started with Rust for safe and fast systems programming.', category: 'Programming Languages' },
  { title: 'PHP Web Development', description: 'Build dynamic websites and web apps using PHP.', category: 'Programming Languages' },
  { title: 'Ruby Programming', description: 'Learn Ruby for scripting, automation, and web development.', category: 'Programming Languages' },
  { title: 'Shell Scripting', description: 'Automate tasks and manage systems with Bash and shell scripts.', category: 'Programming Languages' },
  { title: 'Scala for Data Science', description: 'Leverage Scala for scalable data science and analytics.', category: 'Programming Languages' },

  // --- UI/UX & Design ---
  { title: 'UI/UX Design Principles', description: 'Learn the fundamentals of user interface and user experience design.', category: 'UI/UX & Design' },
  { title: 'Figma for Designers', description: 'Design and prototype interfaces using Figma.', category: 'UI/UX & Design' },
  { title: 'Adobe XD Crash Course', description: 'Create interactive prototypes and designs with Adobe XD.', category: 'UI/UX & Design' },
  { title: 'Web Accessibility', description: 'Make your websites accessible to all users.', category: 'UI/UX & Design' },
  { title: 'Design Systems', description: 'Build scalable and consistent design systems for your products.', category: 'UI/UX & Design' },
  { title: 'Motion Design with Framer Motion', description: 'Create stunning UI animations with Framer Motion in React.', category: 'UI/UX & Design' },

  // --- Testing & Quality ---
  { title: 'Testing with Jest', description: 'Write and run unit tests for your JavaScript and React applications using Jest.', category: 'Testing & Quality' },
  { title: 'Cypress End-to-End Testing', description: 'Automate browser testing with Cypress.', category: 'Testing & Quality' },
  { title: 'Selenium Automation', description: 'Automate web browser interactions with Selenium.', category: 'Testing & Quality' },
  { title: 'Test-Driven Development', description: 'Develop software with a TDD approach for higher quality.', category: 'Testing & Quality' },
  { title: 'Playwright for Modern Web Testing', description: 'Automate end-to-end tests for web apps using Playwright.', category: 'Testing & Quality' },

  // --- Project Management & Soft Skills ---
  { title: 'Agile & Scrum Basics', description: 'Understand agile methodologies and how to manage projects with Scrum.', category: 'Project Management & Soft Skills' },
  { title: 'Git & Version Control', description: 'Track code changes, collaborate with teams, and master Git workflows.', category: 'Project Management & Soft Skills' },
  { title: 'Technical Writing', description: 'Write clear and effective technical documentation.', category: 'Project Management & Soft Skills' },
  { title: 'Cybersecurity Essentials', description: 'Understand security best practices, encryption, and threat prevention.', category: 'Project Management & Soft Skills' },
  { title: 'Interview Preparation', description: 'Ace your technical interviews with coding and behavioral tips.', category: 'Project Management & Soft Skills' },
  { title: 'Open Source Contribution', description: 'Learn how to contribute to open source projects.', category: 'Project Management & Soft Skills' },
  { title: 'Remote Team Collaboration', description: 'Master tools and strategies for effective remote teamwork.', category: 'Project Management & Soft Skills' },
];

// Group courses by category
const groupedCourses = courses.reduce((acc, course) => {
  acc[course.category] = acc[course.category] || [];
  acc[course.category].push(course);
  return acc;
}, {});

const CourseLibrary = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const categories = Object.keys(groupedCourses).filter(cat => cat !== 'Programming Languages');
  const programmingCourses = groupedCourses['Programming Languages'] || [];

  // Helper to filter courses by search
  const filterCourses = (courses) =>
    courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-pink-900 font-sans relative">
      <main className="max-w-5xl mx-auto py-16 px-4 animate-fade-in">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-100 bg-clip-text text-transparent">Course Library</h1>
        <p className="text-lg text-gray-200 mb-12">Browse our curated collection of courses and start learning new skills today!</p>
        {/* Search input */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-pink-400 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        {categories.map((category) => {
          const filtered = filterCourses(groupedCourses[category]);
          if (filtered.length === 0) return null;
          return (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-semibold text-pink-400 mb-6">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-15">
                {filtered.map((course, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-2xl shadow-xl p-6 border-l-4 border-pink-400 flex flex-col justify-between hover:scale-105 hover:shadow-2xl hover:border-l-4 hover:border-pink-600 transition-all duration-300">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
                      <p className="text-gray-300 mb-4">{course.description}</p>
                    </div>
                    <button
                      className="mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-400 text-white font-bold shadow hover:from-pink-600 hover:to-pink-400 transition-all"
                      onClick={() => navigate(`/roadmap/${encodeURIComponent(course.title)}`)}
                    >
                      View Roadmap
                    </button>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
        {/* Separate section for Programming Languages */}
        
      </main>
    </div>
  );
};

export default CourseLibrary; 