import React from 'react'

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row">
        <div className='ml-8 mt-48'>
          <img src="/Logo-Animation-Video.gif" alt="/"  />
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start h-full w-full sm:w-7/12 px-6 pt-6 mt-48 glsm">
          <h1 className="twhite text-4xl font-semibold flex flex-col items-center sm:items-start "> 
            <span className=" text-3xl sm:text-4xl">About us</span>
          </h1>
          <p className=" flex twhite text-center lg:text-start font-light lg:mr-10 lg:mb-16 mt-3 sm:text-sm md:mt-10 md:text-lg md:leading-8">GUC is a conglomeration of individuals who got together because of one common love: the Linux operating system. However, we soon discovered that we had much more in common than Linux: the GNU and Free Software ideals, strong views about the privacy of the individual, and a desire to Change the World.</p> 
        </div>
      </div>
    </div>
  )
}

export default About