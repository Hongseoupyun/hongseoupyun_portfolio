import React from "react";
import "./Navbar.scss"
import useScrollPosition from "../../hooks/useScrollPosition";


export default function Navbar(props) {
  const { menuOpen, setMenuOpen } = props
  const scrollPoisition = useScrollPosition();
  console.log(scrollPoisition)


  return (
    <div className={menuOpen ? "navbar active" : "navbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            H.Y</a>
        </div>
        <div className="right">
          <div className="navContents">
            <a className="navLink" href="#aboutme">ABOUT</a>
          </div>
          <div className="navContents">
            <a className="navLink" href="#projects">PROJECTS</a>
          </div>
          <div className="navContents">
            <a className="navLink" href="#contact">CONTACT</a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div >
  )
}