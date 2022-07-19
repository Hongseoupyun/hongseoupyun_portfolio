import React, { useState } from "react";
import "./Projects.scss";
import { projectsDatas } from "./data";
import ProjectsItem from "./ProjectsItem";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = function (direction) {
    direction === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projectsDatas.length - 1
        )
      : setCurrentSlide(
          currentSlide < projectsDatas.length - 1 ? currentSlide + 1 : 0
        );
  };

  const projectSlides = projectsDatas.map((data) => {
    return (
      <ProjectsItem
        key={data.id}
        title={data.title}
        description={data.description}
        feature={data.feature}
        skillStacks={data.skillStacks}
        gitHub={data.gitHub}
        img={data.img}
      />
    );
  });

  return (
    <div className="projects" id="projects">
      <div className="heading">PROJECTS</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectSlides}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
