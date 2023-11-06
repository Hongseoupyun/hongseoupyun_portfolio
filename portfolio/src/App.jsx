import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Aboutme from './components/aboutme/Aboutme';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Skills from './components/skills/Skills';
import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'aboutme', 'skills', 'projects', 'contact'];
      const currentScrollPos = window.scrollY;
      let current = '';
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element.offsetTop <= currentScrollPos && (element.offsetTop + element.offsetHeight) > currentScrollPos) {
          current = section;
        }
      });
  
      if (current !== currentSection) {
        setCurrentSection(current);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run once
  
  
  console.log("currentSection==>",currentSection)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentSection={currentSection} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro id="intro" />
        <Aboutme id="aboutme" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
