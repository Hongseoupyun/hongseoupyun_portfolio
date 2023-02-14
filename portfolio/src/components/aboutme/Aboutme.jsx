import React from "react";
import "./Aboutme.scss";

export default function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutMeContainer">
        <div className="imgContainer">
          <img className="aboutMeImg" src="assets/profilePic.jpg" alt="" />
        </div>
        <div className="contents">
          <p className="title">ABOUT ME</p>
          <p className="introduction">
            I am a Full-stack developer/Digital Marketing Strategist who
            transitioned from the skilled-trade industry as a Technician.
          </p>
          <p className="introduction">
            In my previous experience as a Technician, I was always drawn to the
            analytical mechanics of creating a solution similar to web
            development. This interest inspired me to pivot my career into a Web
            Developer. <br />
            In addition to my technical skills, I also have experience in
            digital marketing, which has given me a unique perspective on
            optimizing websites for both functionality and marketing goals.
            <br />I am always seeking new challenges and opportunities to grow
            my skills, and I am eager to bring my expertise and drive to a
            dynamic team. I am responsible, hard-working and constantly learning
            and growing.
          </p>
          <p className="introduction">
            I am passionate about building well-designed and user-friendly apps
            with the new skills I learned.
          </p>

          <p className="introduction">
            When I am not at work , I am at home being nice dad and husband, or
            may be playing tennis on court!
          </p>
        </div>
      </div>
    </section>
  );
}
