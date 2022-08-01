import React from "react";
import "./Aboutme.scss"

export default function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutMeContainer">
        <div className="imgContainer">
          <img className="aboutMeImg" src="assets/intro-image.png" alt="" />
        </div>
        <div className="contents">
          <p className="title">ABOUT ME</p>
          <p className="introduction">
            I am a Full-stack developer who transitioned from the skilled-trade industry as a Technician. <br />In my previous past experience as a Technician, I was always drawn to the analytical mechanics <br />of creating a solution which is very similar to web development. This interest inspired me to pivot <br />my career into a Web Developer.
          </p>

          <p className="introduction">
          I am responsible, hard-working and constantly learning and growing. <br />I am passionate in building well-designed and user-friendly apps with new skills i learned.
          </p>

          <p className="introduction">
            When I am not at work , I am at home being nice dad and husband, or may be playing tennis on court!
          </p>
        </div>
        
      </div>
    </section>
  )
}
