import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

let isLoading = true;

export default function Intro() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && isLoading) {
      isLoading = false;
      init(textRef.current, {
        showCursor: true,
        backDelay: 1200,
        typeSpeed: 50,
        backSpeed: 50,
        strings: ["Full Stack Web developer", "Persistent Learner", "Problem-solver"],
      });
    }
  }, []);

  return (
    <section className="intro" id="intro">
      <div className="wrapper">
      <ul className="bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        <h2>Hi there, I'm</h2>
        <h1>Hongseoup Yun</h1>
        <div className="h3">
          <b ref={textRef}></b>
        </div>
      </div>
      <div className="caption">Go check about me!</div>
      <a className="introArrow" href="#aboutme">
        <img src="assets/arrow-down.png" alt="" />
      </a>
    </section>
  );
}
