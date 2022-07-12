import React from "react";
import "./Menu.scss"

export default function Menu (props){
  const {menuOpen, setMenuOpen} = props
  return (
    <div className={menuOpen? "menu active" : "menu"}>
      <ul>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#aboutme">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
  )
}