import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
export default function Navbar() {
  const [menu, setMenu] = useState(false);
 const { darkMode, toggleTheme } = useTheme(); // use global theme


 console.log(darkMode,'jhgjh');
 

  return (
    <nav className="fixed w-full backdrop-blur-lg dark:bg-black bg-white/5 border-b border-white/10 left-0 top-0 right-0 z-50 max-w-6xl mx-auto flex justify-between items-center p-4">
      
      <h1 className="text-xl font-bold">
        Afshana <span className="text-[#7c6aea]">Zaman</span>
      </h1>

      {/* Hamburger menu for mobile */}
      <button className="md:hidden text-2xl" onClick={() => setMenu(!menu)}>
        ☰
      </button>

      {/* Nav links */}
      <ul
        className={`md:flex gap-8 font-medium   ${
          menu ? "block mt-4" : "hidden md:flex"
        }`}
      >
       
        <li>
          <a href="#skills" className="hover:text-[#7c6aea]">
           Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#7c6aea]">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#7c6aea]">
            Contact
          </a>
        </li>
      </ul>

      {/* Dark/Light Mode Toggle */}
      <div className="flex items-center gap-2 ml-4">
        
         <FaSun className="text-orange-600 dark:text-white"/>
       
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
           onChange={toggleTheme}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
       
        <FaMoon className="dark:text-white"  />
        
      </div>
    </nav>
  );
}