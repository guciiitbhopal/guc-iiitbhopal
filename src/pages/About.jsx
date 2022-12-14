import React from 'react'

import logolo from '../assests/logolo.png'

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row ">
        <div className='ml-8'>
        
          <img src={logolo} alt="/"  />
        </div>
        <div className="flex flex-col justify-center lg:items-start">
          <h1 className="twhite text-4xl font-semibold flex flex-col items-center sm:items-start "> 
            <span className=" text-2xl sm:text-3xl  ">About us</span>
          </h1>
          <p className=" twhite text-center lg:text-left font-light lg:mr-10 lg:mb-16 mt-3 sm:mx-auto  sm:max-w-xl sm:text-lg md:mt-3 md:text-xl ">GUC is a conglomeration of individuals who got together because of one common love: the Linux operating system. However, we soon discovered that we had much more in common than Linux: the GNU and Free Software ideals, strong views about the privacy of the individual, and a desire to Change the World.</p> 
        </div>
      </div>
    </div>
  )
}

export default About