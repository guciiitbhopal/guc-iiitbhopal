import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const tmp = () => {
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          setExpanded(false);
        }
      });
    }
    tmp();
  }, []);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <nav className={'transition-all ' + (expanded ? ' h-screen' : '')}>
      <ul className="h-full">
        <div className="flex justify-between items-center mt-4 mb-4 ">
          <div className={" flex flex-col font-audiowide " + (expanded ? ' h-[20%]': '')}>
            <li className="text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              <Link to="/">GNU/Linux Users Club</Link>
            </li>
            <li className="text-md lg:text-xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              <Link to="/">IIIT Bhopal</Link>
            </li>
          </div>
          <div className="lg:hidden flex ml-auto">
            <button onClick={handleExpand}>
              {
                expanded ? (
                  <svg
                    className="w-6 h-6 text-gray-500 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path

                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                )  
              }
            </button>
          </div>
          <div className="hidden text-sm lg:flex "> 
            <li className="mx-2 lg:mx-4 flex  hover:text-slate-400 transition-all duration-300 ">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 lg:mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-2 lg:mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/events">Events</Link>
            </li>
            <li className="mx-2 lg:mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="mx-2 lg:mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/team">Team</Link>
            </li>
            <li className="mx-2 lg:mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
        {
          expanded && (
          <div className="lg:hidden flex flex-col text-center h-[80%] justify-evenly items-center">
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/events" className="nav-link">Events</Link>
            </li>
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/team" className="nav-link">Team</Link>
            </li>
            <li className=" flex hover:text-slate-400 transition-all duration-300">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </div>  
          )
        }
      </ul>
    </nav>
  );
};

export default Navbar;
