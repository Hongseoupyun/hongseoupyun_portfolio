import React from "react";
import "./Contact.scss";
import { FaGithubSquare } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="mainContainer">
        <div className="tittle">Contact Me</div>
        <div className="contactLinks">
          <div className="linkedIn"><FaGithubSquare className="icons"/></div>
          <div className="gitHub"></div>
          <div className="instagram"></div>
          <div className="resume"></div>
        </div>
      </div>

    </div>
  )
}
