import React from "react";
import "./Menu.scss"

export default function Menu (props){
  const {menuOpen} = props
  return (
    <div className={menuOpen? "menu active" : "menu"}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
  )
}