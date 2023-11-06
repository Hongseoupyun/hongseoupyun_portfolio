import React from 'react';
import './Navbar.scss';

export default function Navbar(props) {
  const { menuOpen, setMenuOpen, currentSection } = props;

  return (
    <div className={menuOpen ? 'navbar active' : 'navbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            S.Y
          </a>
        </div>
        <div className="right">
          <div className={currentSection === 'intro' ? 'navContents active' : 'navContents'}>
            <a className="navLink" href="#intro">
              INTRO
            </a>
          </div>
          <div className={currentSection === 'aboutme' ? 'navContents active' : 'navContents'}>
            <a className="navLink" href="#aboutme">
              ABOUT
            </a>
          </div>
          <div className={currentSection === 'skills' ? 'navContents active' : 'navContents'}>
            <a className="navLink" href="#skills">
              SKILLS
            </a>
          </div>
          <div className={currentSection === 'projects' ? 'navContents active' : 'navContents'}>
            <a className="navLink" href="#projects">
              PROJECTS
            </a>
          </div>
          <div className={currentSection === 'contact' ? 'navContents active' : 'navContents'}>
            <a className="navLink" href="#contact">
              CONTACT
            </a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
