import React, { useState } from "react";
import "./Projects.scss";
import ProjectsItem from "./ProjectsItem";
import { useProjectData } from "../../hooks/useProjectData"; // Adjust the import path as necessary

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { projectDatas, loading } = useProjectData();

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : projectDatas.length - 1
        )
      : setCurrentSlide(
          currentSlide < projectDatas.length - 1 ? currentSlide + 1 : 0
        );
  };

  const projectSlides = projectDatas.map((data) => (
    <ProjectsItem
      key={data.id}
      title={data.title}
      description={data.description}
      feature={data.feature}
      skillStacks={data.skillStacks}
      gitHub={data.gitHub}
      demo={data.demo}
      img={data.img}
    />
  ));

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner component
  }

  return (
    <section className="projects" id="projects">
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
    </section>
  );
}
