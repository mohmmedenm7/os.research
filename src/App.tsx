import { useState, useEffect } from 'react';
import BootScreen from './components/BootScreen';
import HeroSection from './components/HeroSection';
import WhatIsOS from './components/WhatIsOS';
import ProcessManagement from './components/ProcessManagement';
import MemoryManagement from './components/MemoryManagement';
import KernelArchitecture from './components/KernelArchitecture';
import OSComparison from './components/OSComparison';
import './App.css';

function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!isBooting) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all reveal elements
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger');
      revealElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [isBooting]);

  const handleBootComplete = () => {
    setIsBooting(false);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (isBooting) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar glass-effect">
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-icon">⚙️</span>
            <span className="logo-text">بحث أنظمة التشغيل</span>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} title="تغيير المظهر">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="btn-nav primary">PDF كامل</button>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection onEnter={() => document.getElementById('layers')?.scrollIntoView({ behavior: 'smooth' })} />
        <div id="layers">
          <WhatIsOS />
        </div>
        <ProcessManagement />
        <MemoryManagement />
        <KernelArchitecture />
        <OSComparison />
      </main>

      <footer className="footer section-padding">
        <div className="container">
          <h3 style={{ marginBottom: '1rem' }}>Research Team - Group 9</h3>
          <p style={{ marginBottom: '0.5rem' }}>Ahmed Elsawi Eisa Mohamed • Mohamed Abubaker Omer Mohamed • Mohammed Eisa Yousif Eisa</p>
          <p style={{ marginBottom: '1rem', opacity: 0.8 }}>University of Science and Technology</p>
          <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>Operating System Architecture • Computer Architecture • Software Engineering</p>
          <div style={{ marginTop: '1.5rem', opacity: 0.5, fontSize: '0.8rem' }}>
            © 2026 Inside the Operating System Research Project
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
