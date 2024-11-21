import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);

const Body = () => {
  useEffect(() => {
    // Smooth scroll effect using GSAP
    const scrollContainer = document.querySelector('.scroll-container');

    gsap.to(scrollContainer, {
      y: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrolling effect
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden scroll-container bg-gray-100">
      {/* Image */}
      <img 
        className="w-[30vw] ml-[32vw] mt-[5vw]" 
        src="https://media.coachella.com/content/coachella-2024/blob-grid-5.png" 
        alt="Coachella Grid" 
      />
      
      {/* Heading */}
      <h1 className="absolute top-[10vw] left-1/2 transform -translate-x-1/2 text-[4vw] font-bold font-[Bolton] text-center">
        Discover, engage, <span className='text-blue-900'>celebrate unforgettable</span> <span>experiences</span>.
      </h1>

      {/* Explore More Button */}
      <div className="relative w-[10vw] h-[3vw] mt-10 mx-[41vw] group">
        <div className="absolute inset-0 bg-yellow-200 group-hover:bg-[#42dfbd] transition-all duration-700 rounded"></div>
        <div className="relative z-10 flex items-center gap-2 justify-center w-full h-full font-[Poppins] text-black hover:text-white font-medium">
          <Link to="/event" className="">Explore More</Link>
          
          <span className="group-hover:hidden">
            <GoArrowUpRight />
          </span>
          <span className="hidden group-hover:inline">
            <GoArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body;
