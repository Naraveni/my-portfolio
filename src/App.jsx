import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Experience from "./Experience";

function App() {
  return (
    <Router basename={import.meta
      .env.BASE_URL}>
      <div className="overflow-x-hidden">
        <NavBar />
        <Routes>
        <Route path="/*" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
