import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import DropdownMenu from "./DropDownMenu.jsx";
import { useDarkMode } from "../Context/Context.jsx";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  
  const { isDark, toggleDarkMode } = useDarkMode();

  const menuItems = [
    { name: "Work", hasDropdown: false },
    {
      name: "Services",
      hasDropdown: true,
      dropdownItems: [
        { text: "Design", subtext: "Handcraft the user experience", bgColor: "bg-pink-300", textColor: "text-pink-600" },
        { text: "Technology", subtext: "Leverage the power of Code", bgColor: "bg-indigo-300", textColor: "text-indigo-600" },
        { text: "Marketing", subtext: "Creative Strategies for brands", bgColor: "bg-purple-300", textColor: "text-purple-600" },
      ],
    },
    { name: "Clients", hasDropdown: false },
    {
      name: "About",
      hasDropdown: true,
      dropdownItems: [
        { text: "About Us", subtext: "We are super-efficient yet humble to serve you!", bgColor: "bg-pink-300", textColor: "text-gray-600" },
        { text: "Team", subtext: "We are proud of our experienced and accomplished team!", bgColor: "bg-indigo-300", textColor: "text-gray-600" },
        { text: "Career", subtext: "Can you offer such experience?", bgColor: "bg-purple-300", textColor: "text-gray-600" },
      ],
    },
    { name: "Knowledge", hasDropdown: false },
  ];

  return (
    <nav
      className="absolute top-0 w-full flex items-center justify-between px-6 md:px-12 py-3 border-b-2 border-black bg-white z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://leo9studio.com/img/logo-light.svg"
          alt="Leo9 Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 font-medium">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.name)}
          >
            <a
              href={`${item.name.toLowerCase()}`}
              className="group flex items-center font-semibold hover:text-pink-500 transition relative"
            >
              <span>{item.name}</span>
              {item.hasDropdown ? (
                <div className="relative w-4 h-4 ml-1">
                  <span className="absolute inset-0 text-lg leading-none transition-opacity duration-300 group-hover:opacity-0">
                    •
                  </span>
                  <FiChevronDown className="absolute inset-0 ml-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : null}
            </a>
            {activeDropdown === item.name && (
              <DropdownMenu items={item.dropdownItems} />
            )}
          </li>
        ))}
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full"
        >
          {isDark ? (
            <FiMoon className="h-10 w-10 fill-black" />
          ) : (
            <FiSun className="h-10 w-10 text-black " />
          )}
        </button>

        
        <a
          href="#contact"
          className="hidden md:inline-block bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-pink-500 transition-colors"
        >
          Contact
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
