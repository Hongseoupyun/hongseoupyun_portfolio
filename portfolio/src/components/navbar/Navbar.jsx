import React from "react";
import "./Navbar.scss"

export default function Navbar(props) {
  const { menuOpen, setMenuOpen } = props

  return (
    <div className={menuOpen? "navbar active" : "navbar" }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Hongseoup Yun</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div >
  )
}