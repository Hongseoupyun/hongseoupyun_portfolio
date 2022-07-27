import React from "react";
import "./Projects.scss";
import { FaGithub } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

export default function ProjectsItem(props) {
  const { title, description, feature, skillStacks, gitHub, img, demo } = props;

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
          </a>{
            demo!==undefined?<a href={demo} target="_blank" rel="noreferrer">
            <BsFillEyeFill className="icon" />
          </a>:<></>
          }
        </div>
        <img className="right" src={img} alt="" />
      </div>
    </div>
  );
}
