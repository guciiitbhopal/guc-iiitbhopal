import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className=" w-full ">
      <div className="flex flex-col md:flex-row items-between mt-4 md:mt-12 ">
        <div className=" flex  justify-between items-center ">
          <div className="flex flex-col font-audiowide">
            <li className=" flex text-md text-transparent mr-4 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-2xl md:text-3xl">
              <Link to="/">GNU/Linux Users Club</Link>
            </li>
            <li className="flex text-sm leading-non text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 s sm:text-xl">
              <Link to="/">IIIT Bhopal</Link>
            </li>
          </div>
          <button
            className={
              "text-white cursor-pointer text-xl flex  md:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className={"fas fa-bars" + (navbarOpen ? " hidden" : " ")}></i>
            <i
              className={"fa-solid fa-xmark" + (navbarOpen ? "" : " hidden ")}
            ></i>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center justify-center " +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col items-center md:flex-row text-twhite list-none lg:ml-auto">
            <li className=" lg:mx-4 flex text-sm hover:text-slate-400 transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className=" lg:mx-4 flex text-sm hover:text-slate-400 transition-all duration-300 ">
              <Link to="/about">About</Link>
            </li>
            <li className=" lg:mx-4 flex text-sm hover:text-slate-400 transition-all duration-300 ">
              <Link to="/events">Events</Link>
            </li>
            <li className=" lg:mx-4 flex text-sm hover:text-slate-400 transition-all duration-300 ">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className=" lg:mx-4 flex text-sm  hover:text-slate-400 transition-all duration-300">
              <Link to="/team">Team</Link>
            </li>
            <li className=" lg:mx-4 flex  text-sm hover:text-slate-400 transition-all duration-300 border border-t-0 border-l-0 border-r-0 border-slate-600 md: border-none ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
