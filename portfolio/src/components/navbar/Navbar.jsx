import React from "react";
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">Hongseoup Yun</a>
        </div>
        <div className="right">
          <div>
            About
          </div>
          <div>
            Projects
          </div>
          <div>
            Contact
          </div>
        </div>
      </div>
    </div>
  )
}