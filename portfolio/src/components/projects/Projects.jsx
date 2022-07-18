import React, { useState } from "react";
import "./Projects.scss";
import { projectsDatas } from "./data";
import { FaGithub } from "react-icons/fa";

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

  return (
    <div className="projects" id="projects">
      <div className="heading">PROJECTS</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projectsDatas.map((data) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <h2 className="title">{data.title}</h2>
                  <p className="description">{data.description}</p>
                  <p className="feature">{data.feature}</p>
                  <p className="skillStacks">{data.skillStacks}</p>
                </div>

                <div className="gitHub">
                  <a
                    href={data.gitHub}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icon" />
                  </a>
                </div>
                <img className="right" src={data.img} alt="" />
              </div>
            </div>
          );
        })}
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
