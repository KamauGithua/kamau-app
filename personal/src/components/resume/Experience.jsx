import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
    return (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="py-12 font-titleFont flex gap-20"
        >
          {/* Job Experience Section */}
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Aircraft Maintenance Technician"
                subTitle="National Air Support Department, Nairobi, Kenya (01/2023 - 04/2023)"
                result="Kenya"
                des="Performed troubleshooting and inspection duties, including maintenance of Cessna and Bell helicopters. Ensured compliance with aviation safety standards and maintained aircraft logbooks and records."
              />
              <ResumeCard
                title="Apprentice"
                subTitle="Kenya Civil Aviation Authority, Nairobi, Kenya (02/2021 - 05/2021)"
                result="Kenya"
                des="Prepared special flight permits and conducted inspections for certification and approval. Promoted compliance with airworthiness regulations through inspections and documentation."
              />
              <ResumeCard
                title="Aeronautical Engineering Graduate"
                subTitle="East African School of Aviation (Graduated 11/2022)"
                result="Kenya"
                des="Completed a diploma with a focus on aircraft systems, gas turbines, propeller systems, and electrical systems."
              />
            </div>
          </div>

          {/* Trainer Experience Section */}
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
              <h2 className="text-4xl font-bold">Freelance & Project Experience</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Freelance Fullstack Developer"
                subTitle="Remote (09/2023 - Present)"
                result="Remote"
                des="Developed a Church Website and Water Delivery Website with PHP, Laravel, and MySQL. Built responsive web solutions with interactive features for client needs and order tracking."
              />
              <ResumeCard
                title="IST Alumni System"
                subTitle="Personal Project (2024)"
                result="Completed"
                des="Created a Laravel and MySQL-based system for alumni management, allowing user profile updates, social media integration, and role-based access for admins and superusers."
              />
              <ResumeCard
                title="Aviation News Aggregator App"
                subTitle="Personal Project | Android, Kotlin (2024)"
                result="Completed"
                des="Developed an Android app to aggregate aviation news, using Jetpack Compose and Firebase for real-time updates and a seamless user experience."
              />
            </div>
          </div>
        </motion.div>
      );
}

export default Experience;
