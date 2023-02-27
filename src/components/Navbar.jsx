import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-11/12 border-b fixed border-slate-700 pb-4 backdrop-blur-md z-10">
      <div className="flex flex-col md:flex-row items-between mt-4 md:mt-12">
        <div className=" flex  justify-between items-center ">
          <div className="flex flex-col font-audiowide text-md text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-2xl md:text-3xl ml-10">
            {/* <li className=" flex text-md text-transparent mr-4 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-2xl md:text-3xl"> */}
              <Link to="/">GNU/Linux Users Club</Link>
            {/* </li>
            <li className="flex text-sm leading-non text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 s sm:text-xl">
              <Link to="/">IIIT Bhopal</Link>
            </li> */}
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
          <ul className="flex flex-col items-center md:flex-row text-twhite list-none lg:ml-32">
            <li className=" lg:mx-4 flex text-sm duration-300 parent num1 btn1 lg:ml-24">
              <Link to="/" className="a ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
              </Link>
            </li>
            <li className=" lg:mx-4 flex text-sm  duration-300 parent num1 btn1">
              <Link to="/about" className="a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About
              </Link>
            </li>
            <li className=" lg:mx-4 flex text-sm  duration-300 parent num1 btn1">
              <Link to="/events" className="a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>Events
              </Link>
            </li>
            <li className=" lg:mx-4 flex text-sm  duration-300 parent num1 btn1">
              <Link to="/blogs" className="a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>Blogs
              </Link>
            </li>
            <li className=" lg:mx-4 flex text-sm   duration-300 parent num1 btn1">
              <Link to="/team" className="a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>Team
              </Link>
            </li>
            <li className=" lg:mx-4 flex  text-sm  duration-300 border border-t-0 border-l-0 border-r-0 border-slate-600 md: border-none parent num1 btn1">
              <Link to="/contact" className="a">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
