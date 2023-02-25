import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="grid lg:order-1 order-2 auto-rows-fr mt-32">
          <div className="order-2 lg:-my-24 sm:mt-20">
            <p className="text-sm md:text-lg text-gray-400  sm:-translate-y-9 lg:-translate-y-20">
              Our goal is to create a peer-to-peer learning environment, promote IIIT Bhopal's open source culture, strengthen devops and linux community and help students deepen their knowledge of the latest developer products through hands-on workshops and events.
            </p>
          </div>

          <div className="order-1">
            <p className="font-audiowide lg:text-3xl lg:translate-y-20">
              The Best Things In Life Are Free
            </p>
          </div>

          <p className="mb-6 lg:mb-0 order-last lg:-translate-y-16 mt-80">
            <a className="text-pink-400 text-sm font-bold" href="/about">
              Learn More
            </a>
          </p>
        </div>

        <div className="md:justify-end items-center justify-start mt-40 lg:-translate-y-8 lg:translate-x-12 order-1 lg:order-2">
          <img className="mb-24 lg:-translate-y-1" src="/Logo-Animation-Video.gif" alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Home;
