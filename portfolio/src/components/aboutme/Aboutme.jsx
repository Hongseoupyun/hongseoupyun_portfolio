import React from "react";
import "./Aboutme.scss"

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutme">
      <div className="aboutMeContainer">
        <div className="imgContainer"><img className="aboutMeImg" src="assets/intro-image.png" alt="" /></div>
        <div className="text">
          <p className="title"><h1>About me</h1></p>
          <p>
            I am a Full-stack developer. I am responsible,hard-working and constantly learning and growing. <br />I am passionate in building well-designed and user-friendly apps with new skills i learned.
          </p>
          <p>
            When I am not at work , I am at home being nice dad and husband, or may be playing tennis on court!
          </p>
        </div>
      </div>
    </div>
  )
}
