import React from 'react';

const About = () => {
  return (
    <div className="flex w-full h-screen bg-zinc-100">
      {/* Left Section: About Us Text */}
      <div className=" w-[50%] h-full flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-semibold font-[Bolton] text-center text-blue-900">
          About Us
        </h1>
        <div className="h-[2px] bg-blue-900 w-[8vw] mt-2"></div>
        <p className="text-lg font-[Poppins] text-black-800 mt-6 leading-relaxed text-cente font-medium">
          We are passionate event organizers who specialize in crafting unforgettable experiences. 
          Whether it's a corporate gathering, cultural festival, or personal celebration, 
          we strive to make every moment extraordinary. Our dedicated team ensures seamless execution, 
          blending creativity with meticulous planning to bring your vision to life.
        </p>
      </div>

    
      <div className="w-[50%] h-full flex justify-center items-center bg-zinc-100">
        <img
          className="w-[40vw] p-10 mix-blend-multiply"
          src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?t=st=1732119512~exp=1732123112~hmac=1032f77bcc49a65fa1824fa3a2264e5e438260ccb90d531a0801d55bb68d85ce&w=740"
          alt="Teamwork and Event Planning"
        />
      </div>
    </div>
  );
};

export default About;
