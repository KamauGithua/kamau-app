import React from 'react'
import Title from "../layouts/Title"
import {projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix} from "../../assets/index"

import ProjectsCard from './ProjectsCard'

const Projects = () => {
    return (
        <section
          id="projects"
          className="w-full py-20 border-b-[1px] border-b-black"
        >
          <div className="flex justify-center items-center text-center">
            <Title
              title="MY PORTFOLIO"
              des="My Projects"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <ProjectsCard
              title="NexChat App"
              des=" An Android chat application built with Jetpack Compose and Firebase Authentication, allowing users to communicate in real time with secure login and messaging features."
              
              src={projectFive}
            />
            <ProjectsCard
              title="IST Alumni System"
              des="A web-based alumni management system developed using Laravel, PHP, and MySQL. This system enables alumni to update profiles, connect with peers, and manage personal portfolios."
              src={projectTwo}
            />
            <ProjectsCard
              title="Water Delivery Website"
              des="A MERN stack-based website that facilitates water delivery orders, allowing customers to place requests, track their orders, and communicate with service providers efficiently."
              src={projectFour}
            />
            <ProjectsCard
              title="IST Alumni Android App"
              des="An Android application designed for IST alumni, featuring user profile updates, social media integration, and an intuitive interface for seamless interaction within the alumni community."
              src={projectThree}
            />
            <ProjectsCard
              title="Expense Tracker"
              des="A React.js-based expense tracker application for managing daily expenses. Users can add, edit, and categorize expenses, providing a clear overview of spending habits."
              src={projectSix}
            />
            <ProjectsCard
              title="Trinity Church Application"
              des="A responsive church website built with HTML5, Bootstrap CSS, Javascript, featuring sections for event management, sermons, and community engagement to keep members connected and informed."
              src={projectOne}
            />
          </div>
        </section>
      );
}

export default Projects
