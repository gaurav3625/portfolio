import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <h1>Gaurav Saini</h1>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Hi, I'm Gaurav Saini 👋</h2>
          <p>
            A passionate Computer Science student at IIIT Trichy with excellent
            problem-solving skills, a strong foundation in Data Structures and
            Algorithms, and hands-on experience in full-stack development.
          </p>
          <div className="buttons">
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/gaurav3625" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/gaurav-saini22" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:gauravsaini221004@gmail.com" title="Email">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h.01L12 10.09l10.354-6.269h.01c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Codex - Online Coding Platform</h3>
              <p>
                Built a responsive coding contest platform with real-time
                leaderboards, user authentication, and dynamic UI using React,
                Node.js, MongoDB, Express, and Tailwind.
              </p>
            </div>
            <div className="project-card">
              <h3>Student Management System</h3>
              <p>
                Developed a modular system in C++ with OOP & SOLID principles,
                managing 1000+ records, CRUD operations, and automated hostel
                allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-card">
            <h3>Full Stack Developer Intern - P9 Digital</h3>
            <p className="date">May 2025 - July 2025 | Remote</p>
            <ul>
              <li>
                Developed a comprehensive SEO management platform using React,
                Node.js, Express, and MongoDB.
              </li>
              <li>
                Implemented automated Puppeteer web scraping for outbound link
                extraction and analysis.
              </li>
              <li>
                Built React dashboard with pagination, filters, and real-time
                updates, improving productivity by 40%.
              </li>
              <li>
                Designed async batch processing with UUID tracking for Excel
                imports, reducing manual tasks by 60%.
              </li>
              <li>
                Integrated secure authentication with role-based access control.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Passionate about solving challenging problems, exploring web
              technologies, and building impactful full-stack applications.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <p>
                C, C++, Java | HTML, CSS, JavaScript, React, Node.js | MongoDB |
                OOP, OS, DBMS, DSA, Unix | Git, GitHub, VS Code
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-list">
            <ul>
              <li>🏆 CodeChef 2★ (Max 1573), Global Rank 254 in Div 3</li>
              <li>🚀 Codeforces Rating: 1277 (Pupil)</li>
              <li>💡 LeetCode Rating: 1667</li>
              <li>⚡ Solved 400+ problems and participated in 30+ live contests</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>Let's connect! Feel free to reach out via email or socials.</p>
            <div className="contact-social">
              <a href="https://github.com/gaurav3625" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/gaurav-saini22" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:gauravsaini221004@gmail.com" title="Email">
                <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h.01L12 10.09l10.354-6.269h.01c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 Gaurav Saini. All rights reserved.
      </footer>
    </div>
  );
}