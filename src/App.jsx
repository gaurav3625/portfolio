import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, Award, Send, ExternalLink, Menu, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'experience', 'about', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    'Languages': ['C', 'C++', 'Java', 'JavaScript'],
    'Frontend': ['HTML', 'CSS', 'React', 'Tailwind'],
    'Backend': ['Node.js', 'Express', 'MongoDB'],
    'Tools': ['Git', 'GitHub', 'VS Code'],
    'Concepts': ['OOP', 'DSA', 'DBMS', 'OS']
  };

  const projects = [
    {
      title: 'Codex - Online Coding Platform',
      description: 'A comprehensive coding contest platform featuring real-time leaderboards, secure user authentication, and dynamic UI. Built with modern web technologies for optimal performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      highlights: ['Real-time updates', 'User authentication', 'Contest management']
    },
    {
      title: 'Student Management System',
      description: 'Developed a modular system built with advanced C++ OOP principles. Efficiently handles 1000+ records with automated processes and robust CRUD operations.',
      tech: ['C++', 'OOP', 'Data Structures'],
      highlights: ['1000+ records', 'SOLID principles', 'Auto allocation']
    }
  ];

  const achievements = [
    { title: 'CodeChef 2★', detail: 'Max Rating 1573, Global Rank 254 in Div 3' },
    { title: 'Codeforces Pupil', detail: 'Current Rating: 1277' },
    { title: 'LeetCode', detail: 'Rating: 1732' },
    { title: 'Problem Solving', detail: '600+ problems, 50+ live contests' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-lg shadow-lg') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
              GS
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['projects', 'experience', 'about', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors relative group ${activeSection === item ? 'text-blue-500' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all group-hover:w-full ${activeSection === item ? 'w-full' : ''}`}></span>
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['projects', 'experience', 'about', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-2 rounded-lg capitalize ${activeSection === item ? 'bg-blue-500 text-white' : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Gaurav Saini
              </h1>
              <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full"></div>
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Full Stack Developer & Competitive Programmer
          </p>
          
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Computer Science student at IIIT Trichy passionate about building impactful applications
            and solving complex problems with elegant solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-full font-medium border-2 hover:scale-105 transition-all ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/gaurav3625', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-saini22', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:gauravsaini221004@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md'}`}
                title={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code2 className="mr-3 text-blue-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`group p-6 rounded-2xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="mr-3 text-purple-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-500">Full Stack Developer Intern</h3>
                <p className="text-xl text-purple-500">P9 Digital</p>
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>May 2025 - July 2025 | Remote</p>
            </div>
            
            <div className="space-y-3">
              {[
                'Developed comprehensive SEO management platform with React, Node.js, Express, and MongoDB',
                'Implemented automated Puppeteer web scraping for outbound link extraction and analysis',
                'Built React dashboard with pagination, filters, and real-time updates, improving productivity by 40%',
                'Designed async batch processing with UUID tracking for Excel imports, reducing manual tasks by 60%',
                'Integrated secure authentication with role-based access control'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">▹</span>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <User className="mr-3 text-green-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a passionate Computer Science student at IIIT Trichy with a strong foundation in 
                full-stack development and competitive programming. I thrive on solving challenging 
                problems and building applications that make a real impact.
              </p>
              <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                With hands-on experience in modern web technologies and a solid grasp of data structures 
                and algorithms, I'm constantly pushing myself to learn and grow as a developer.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-semibold text-blue-500 mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-lg text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Award className="mr-3 text-yellow-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-900' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="text-5xl mb-3">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Send className="mr-3 text-pink-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          </div>
          
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/gaurav3625', label: 'GitHub', color: 'hover:text-gray-600' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-saini22', label: 'LinkedIn', color: 'hover:text-blue-600' },
              { icon: Mail, href: 'mailto:gauravsaini221004@gmail.com', label: 'Email', color: 'hover:text-red-500' }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md'} ${color}`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Gaurav Saini. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}