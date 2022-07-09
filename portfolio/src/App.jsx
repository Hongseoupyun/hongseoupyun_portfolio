import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
import Aboutme from "./components/aboutme/Aboutme";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
