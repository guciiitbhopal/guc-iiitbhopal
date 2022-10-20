import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="flex justify-between items-center mt-12 mb-10">
          <div className=" flex flex-col font-audiowide ">
            <li className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              <Link to="/">GNU/Linux Users Club</Link>
            </li>
            <li className=" text-xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              <Link to="/">IIIT Bhopal</Link>
            </li>
          </div>
          <div className="flex text-sm "> 
            <li className="mx-4 flex  hover:text-slate-400 transition-all duration-300 ">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/team">Team</Link>
            </li>
            <li className="mx-4 flex hover:text-slate-400 transition-all duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
