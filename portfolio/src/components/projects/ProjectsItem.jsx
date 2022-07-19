import React from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";

export default function ProjectsItem(props) {
  const { title, description, feature, skillStacks, gitHub, img } = props;

  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <p className="feature">{feature}</p>
          <p className="skillStacks">{skillStacks}</p>
        </div>

        <div className="gitHub">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
        <img className="right" src={img} alt="" />
      </div>
    </div>
  );
}
