import React from "react";
import Logo from "../../component/Logo/Logo";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto bg-base-100 shadow-lg px-4 py-2 flex justify-between items-center">
      <ul>
        <li>
          <a>
            <Logo />
          </a>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li>
          <a
            href="#about"
            className="text-base-content hover:text-primary btn btn-accent btn-sm"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-base-content hover:text-primary btn btn-accent btn-sm"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-base-content hover:text-primary btn btn-accent btn-sm"
          >
            Contact
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="#"
            // target="_blank"
            className="text-base-content hover:text-primary btn btn-accent btn-sm"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
