import React from "react";
import { skillsDatas } from "./data";
import "./Skills.scss";

export default function Skills() {
  const skills = skillsDatas.map((data) => {
    return (
      <div className="skills-icon">
        <img src={data.img} alt="" />
      </div>
    );
  });

  return (
    <section className="skills-section" id="skills">
      <h1>SKILLS</h1>
      <div className="skills-container">{skills}</div>
    </section>
  );
}
