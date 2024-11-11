import React from 'react'
import { useTypewriter, Cursor} from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.", "Aircraft Maintenance Technician."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kamau Githua</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Hello! I’m a Fullstack Developer with a diverse background in Aeronautical Engineering and a passion for creating impactful software solutions. After graduating with a degree in Aeronautical Engineering and completing a Diploma in Fullstack Development, I embarked on a journey to bridge my technical knowledge with the digital realm. I specialize in building dynamic, user-centered applications and have experience with modern web and mobile development frameworks, including React, Vue.js, Laravel, and Android development with Kotlin and Jetpack Compose. My goal is to leverage my engineering insights and software skills to drive innovative solutions, particularly in industries like aeronautics and IT, where technology can transform complex systems into user-friendly experiences.
        </p>
         {/* Buttons */}
         <div className="flex gap-5">
                <button className="px-6 py-3 bg-designColor text-white font-bold rounded-lg hover:bg-opacity-90 transition duration-300">
                    Download Resume
                </button>
                <a href="mailto:githuakamau99@gmail.com?subject=Job Opportunity - Hire Me">
  <button className="px-6 py-3 bg-transparent border-2 border-designColor text-designColor font-bold rounded-lg hover:bg-designColor hover:text-white transition duration-300">
    Hire Me
  </button>
</a>
                
            </div>
      </div>





     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
