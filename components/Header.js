import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { state, toggleTheme } = useTheme();
  return (
    // <-------- Nav menu -------->
    <header className="flex items-center justify-between w-full p-14">
      <nav>
        <ul className="flex items-center gap-x-16 whitespace-nowrap">
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Tech Stack
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* // <-------- Icons --------> */}
      <div className="flex items-center">
        <span className="flex space-x-6 border-r mr-4 border-slate-300">
          <button
            className="icon dark-mode-icon mr-4 text-2xl text-slate-400"
            onClick={toggleTheme}
            type="button"
          >
            {state.theme === "light" ? (
              <MdOutlineLightMode />
            ) : (
              <MdOutlineNightlight />
            )}
          </button>
        </span>
        <span className="flex space-x-6">
          <a
            href="#"
            className="icon text-2xl text-slate-400 hover:text-slate-500"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="icon text-2xl text-slate-400 hover:text-slate-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="icon text-2xl text-slate-400 hover:text-slate-500"
          >
            <FaRegEnvelope />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
