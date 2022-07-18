import React from "react";
import "./Projects.scss"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="heading">PROJECTS</div>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <h2 className="title">SneakersPickers</h2>
              <p className="description">
              SnekersPickers is a trading platform app that users can trade their shoes.
              </p>
              <p className="feature">
                Users can created and updated profile, and listings. Users can make trade offer and get notification for trade offer.
              </p>
              <p className="skillStacks">
                ReactJS, NodeJs, Express.js, Sass, PostgreSQL 
              </p>
            </div>
            <img className="right" src="assets/SneakersPickers.gif" alt=""/>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left"/>
      <img src="assets/arrow.png" alt="" className="arrow right"/>

    </div>
  )
}