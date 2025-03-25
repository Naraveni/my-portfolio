import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
