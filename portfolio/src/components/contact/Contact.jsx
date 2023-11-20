import React from "react";
import "./Contact.scss";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="mainContainer">
        <div className="tittle">CONTACT ME</div>
        <div className="contactLinks">
          <a
            href="https://github.com/Hongseoupyun"
            target="_blank"
            rel="noreferrer"
          >
            <div className="gitHub">
              <FaGithubSquare className="icons" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/simonhongseoupyun/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedIn">
              <FaLinkedin className="icons" />
            </div>
          </a>
          <a
            href="https://resume.creddle.io/resume/ew0nc133t6q"
            target="_blank"
            rel="noreferrer"
          >
            <div className="resume">
              <CgFileDocument className="icons" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
