import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.scss"
import { useState } from "react";

function App() {

const [menuOpen,setMenuOpen] = useState (false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Aboutme />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
