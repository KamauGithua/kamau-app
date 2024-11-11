import React from 'react'
import {FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {  SiJavascript, SiAndroid, SiLaravel } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Find me in
      </h2>
      <div className="flex gap-4">
      <a href="https://github.com/KamauGithua" target="_blank" rel="noopener noreferrer">
    <span className="bannerIcon">
      <FaGithub />
    </span>
  </a>
        
        <span className="bannerIcon">
          <FaTwitter />
        </span>
        <a href="https://www.linkedin.com/in/your-profile-name" target="_blank" rel="noopener noreferrer">
    <span className="bannerIcon">
      <FaLinkedinIn />
    </span>
  </a>
       
      </div>
    </div>
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        BEST SKILL ON
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaReact />
        </span>
        <span className="bannerIcon">
          <SiJavascript />
        </span>
        <span className="bannerIcon">
          <SiLaravel />
        </span>
        <span className="bannerIcon">
          <SiAndroid />
        </span>
      </div>
    </div>
  </div>
  )
}

export default Media
