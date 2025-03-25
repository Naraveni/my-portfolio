import { useState } from "react";
import { WiredButton } from "wired-elements-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const hoverColors = [
    "hover:bg-blue-500/100",
    "hover:bg-red-500/100",
    "hover:bg-green-500/100",
    "hover:bg-yellow-500/100",
    "hover:bg-purple-500/100",
    "hover:bg-pink-500/100",
  ];

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="bg-gray-300 text-black fixed bottom-0 left-0 w-full z-10">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center w-full p-4">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <WiredButton
              className={` text-black text-xl mx-2 
              ${hoverColors[index]} hover:text-white transition-all duration-300
               `}

            >
              {item.name}
            </WiredButton>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black text-2xl"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Better UX */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-300 transition-transform duration-300 p-6 flex flex-col items-center space-y-4 
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} max-h-screen overflow-y-auto`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={() => {
              setActiveIndex(index);
              setIsMenuOpen(false);
            }}
            className={`text-xl font-semibold transition p-4 w-full text-center rounded-lg 
              ${activeIndex === index ? "bg-amber-600 text-white" : "text-black"} 
              hover:bg-blue-500 hover:text-white`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
