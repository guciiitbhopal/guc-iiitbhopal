import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="grid lg:order-1 order-2 auto-rows-fr">
          <div className="order-2 lg:-my-4">
            <p className="sm:text-sm md:text-base text-gray-400  sm:-translate-y-9 lg:-translate-y-28">
              At the GUC IIIT Bhopal, we promote the use of CLI.
              <br/>
              Besides, we actively encourage involvement in Open-source.
            </p>
          </div>

          <div className="order-1">
            <p className="font-audiowide lg:text-2xl lg:translate-y-9">
              The Best Things In Life Are Free
            </p>
          </div>

          <p className="mt-6 mb-6 lg:mb-0 order-last lg:-translate-y-16">
            <a className="text-pink-400 text-sm font-bold" href="/">
              Learn More
            </a>
          </p>
        </div>

        <div className="md:justify-end items-center justify-start mt-4 lg:-translate-y-8 lg:translate-x-12 order-1 lg:order-2">
          <img
            className="mb-24 lg:-translate-y-16"
            src="/logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
