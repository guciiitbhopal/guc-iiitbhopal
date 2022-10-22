import React from 'react'

const Home = () => {
  return (
    <div className="h-screen">

      <div className="grid lg:grid-cols-2">

      <div>
        <p className='sm:text-base pb-4 text-gray-400'>At the GUC, we promote the use of CLI.<br />
        Besdies, we actively encourage involvement
        in Open-source.</p>

        <p className="text-md lg:text-base mt-6 mb-8 text-gray-400">Lorem ipsum dolor sit amet  consectetur adipisicing elit. Dignissimos fuga veniam
        perspiciatis odit sint voluptate.</p> 

        <p className="font-audiowide lg:text-2xl mt-10">The Best Things In Life Are Free</p>
        <p className="mt-6"><a className="text-pink-400 text-sm font-bold" href="/">Learn More</a></p>
      </div>

      <div className="lg:justify-end items-center justify-start mt-4">
        <img className="mb-24" src="/logo.png" alt="logo"/>
        </div>
          <div className="lg:mb-10">

            <button className="inline-flex justify-center items-center bg-white hover:bg-blue-500 text-black hover:text-white text-bold pr-2 pl-3 py-0.30 rounded sm:text-xs text-justify uppercase"> <svg className="mr-1" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.14572 3C2.43242 2.34148 1.71609 1.57457 1 0.687988C5.5 6.25939 13 10 21 0.687988C20.1662 1.82895 18.9673 3.09008 17.5 4.13916M3.14572 3L1.5 5.5M3.14572 3C4.04712 3.83218 4.94366 4.49127 5.82872 5M5.82872 5L4.5 8M5.82872 5C7.25843 5.8218 8.65816 6.25127 10 6.38435M10 6.38435V10M10 6.38435C11.4078 6.52397 12.7519 6.33733 14 5.93519M14 5.93519L15.5 8.5M14 5.93519C15.2791 5.52308 16.4573 4.88467 17.5 4.13916M17.5 4.13916L19 6.38435" stroke="black"/></svg>
            show <br/> details</button> 
            </div>

        </div>

      </div>
      
    
  );
};
export default Home