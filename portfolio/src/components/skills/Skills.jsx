import React from "react";
import { useSkillData } from "../../hooks/useSkillData"; // Adjust the import path as necessary
import "./Skills.scss";

export default function Skills() {
  const { skillData, loading } = useSkillData();
  const skills = skillData.map((data) => {
    return (
      <div className="skills-icon">
        <img src={data.img} alt={data.name} />
      </div>
    );
  });

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <section className="skills-section" id="skills">
      <h1>SKILLS</h1>
      <div className="skills-container">{skills}</div>
    </section>
  );
}
