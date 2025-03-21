import { WiredButton, WiredInput } from 'wired-elements-react';

const NavBar = () => {
  return (
    <div className="bg-gray-300 text-black fixed bottom-0 left-0 w-full z-10">
      {/* Navbar container using Tailwind for layout */}
      <div className="flex items-center justify-between p-4">
        
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-8 justify-center w-full">
          <a href="#about">
            <WiredButton className="bg-white-700 hover:bg-amber-600 text-black hover:text-white text-xl" label="About">About</WiredButton> 
          </a>
          <a href="#experience">
            <WiredButton className="bg-white-700 hover:bg-cyan-900 text-black hover:text-white text-xl " label="Experience">Experience</WiredButton> 
          </a>
          <a href="#projects">
            <WiredButton className="bg-white-700 hover:bg-blue-600 text-black hover:text-white text-xl" label="Projects">Projects</WiredButton> 
          </a>
          <a href="#skills">
            <WiredButton className="bg-white-700 hover:bg-blue-600 text-black hover:text-white text-xl" label="Skills">Skills</WiredButton> 
          </a>
          <a href="#resume">
            <WiredButton className="bg-white-700 hover:bg-green-700 text-black hover:text-white  text-xl" label="Resume">Resume</WiredButton> 
          </a>
          <a href="#contact">
            <WiredButton className="bg-white-700 hover:bg-gray-600 text-black hover:text-white text-xl" label="Contact">Contact</WiredButton> 
          </a>
          
        </div>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex items-center">
          <button className="text-black text-2xl">
            {/* Mobile menu icon (you can replace it with an icon library like FontAwesome) */}
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
