import React from "react";
import logo from "../assests/logo.png";

const Contact = () => {
  return (
    <div className="lg:flex">
      <div>
        <h1 className="sm:mx-20 lg:mx-28 xl:mx-20 mx-12 sm:text-4xl text-2xl text-center sm:text-left py-5 pt-14 font-mono">Connect with us</h1>
        <div className="sm:flex sm:mx-9 mx-7 md:text-base text-sm">
          <ul className="mx-14 ">
            <li className="text-center md:text-left my-5 hover:text-slate-400">
              <i class="fa-brands fa-github text-xl"></i>
              <a className="lg:mx-2 mx-5" href="https://github.com/guciiitbhopal">
                Github
              </a>
            </li>
            <li className="text-center md:text-left my-5 hover:text-slate-400">
              <i class="fa-brands fa-linkedin text-xl"></i>
              <a className="lg:mx-2 mx-4" href="https://www.linkedin.com/company/gnu-linux-users-club-iiit-bhopal/">
                Linkedin
              </a>
            </li>
            <li className="text-center md:text-left my-5 hover:text-slate-400">
            <i class="fa-solid fa-globe text-xl"></i>
              <a className="lg:mx-2 mx-4" href="/">
                Website
              </a>
            </li>
          </ul>
          <ul  className="mx-14 sm:mx-0 ">
            <li className="text-center md:text-left my-5 hover:text-slate-400">
              <i class="fa-brands fa-twitter text-xl"></i>
              <a className="lg:mx-2 mx-5" href="https://twitter.com/GUCIIITBhopal">
                Twitter
              </a>
            </li>
            <li className="text-center md:text-left my-5 hover:text-slate-400">
              <i class="fa-brands fa-youtube text-xl"></i>
              <a className="lg:mx-1 mx-3" href="https://www.youtube.com/channel/UCDgky_4cj2goPs3TJQPxaSA">
                Youtube
              </a>
            </li>
            <li className="text-center md:text-left my-5 hover:text-slate-400">
              <i class="fa-brands fa-instagram text-xl"></i>
              <a className="lg:mx-2 mx-2" href="https://www.instagram.com/guc_iiitbhopal/">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className>
        <img className="w-96 sm:ml-20 ml-6 mb-16 " src={logo} alt="GUC-logo" />
      </div>
    </div>
  );
};

export default Contact;
