import React from "react";
import "./Aboutme.scss";

const IntroductionParagraph = ({ children }) => (
  <p className="introduction">{children}</p>
);

export default function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutMeContainer">
        <div className="imgContainer">
          <img className="aboutMeImg" src="assets/profilePic.jpg" alt="Profile" />
        </div>
        <div className="contents">
          <p className="title">ABOUT ME</p>
          <IntroductionParagraph>
            Hello World!
            I am a multi-talented professional with experience in both IT Support and Full-stack Development.
          </IntroductionParagraph>
          <IntroductionParagraph>
            Having worked in the IT Support industry as an Analyst, I have honed my skills in problem-solving and providing technical solutions to maintain and optimize systems. This experience inspired me to expand my knowledge and transition into Web Development as well.
          </IntroductionParagraph>
          <IntroductionParagraph>
            As a Full-stack Developer, I have gained valuable experience in building well-designed and user-friendly applications. My background in IT support has provided me with a unique perspective on creating and maintaining websites, emphasizing both functionality and user experience. I am eager to continue developing my skills and contribute to meaningful projects in this dynamic field.
          </IntroductionParagraph>
          <IntroductionParagraph>
            I am always seeking new challenges and opportunities to grow my skills in both IT Support and Web Development. I am eager to bring my expertise, drive, and passion for learning to a dynamic team that values versatile professionals.
          </IntroductionParagraph>
          <IntroductionParagraph>
            I am responsible, hard-working, and constantly learning and growing. My dual skill set allows me to offer comprehensive support in both IT systems and web development projects.
          </IntroductionParagraph>
        </div>
      </div>
    </section>
  );
}
