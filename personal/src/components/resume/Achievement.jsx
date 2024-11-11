import React from 'react';
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {    
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="py-12 font-titleFont flex gap-20"
        >
          <div>
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
              <h2 className="text-4xl font-bold">Company Experience</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Freelance Fullstack Developer"
                subTitle="Remote"
                result="Ongoing"
                des="Built responsive and interactive web and mobile applications for clients. Key projects include a Church Website with event management features and a Water Delivery Website with real-time order tracking."
              />
              <ResumeCard
                title="IST Alumni System"
                subTitle="Personal Project"
                result="Completed"
                des="Developed a system to manage alumni profiles and communication using Laravel and MySQL. Integrated social media links, profile updates, and secure user authentication."
              />
              <ResumeCard
                title="Aviation News Aggregator App"
                subTitle="Personal Project | Android, Kotlin"
                result="Completed"
                des="Created an Android app that aggregates aviation industry news, using Jetpack Compose and Firebase for real-time updates."
              />
            </div>
          </div>
          
          <div>
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
              <h2 className="text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Aircraft Maintenance Technician"
                subTitle="National Air Support Department, Nairobi, Kenya"
                result="Completed"
                des="Performed troubleshooting, corrosion control, and inspection duties. Maintained and repaired various aircraft, including Cessna and Bell helicopters, ensuring compliance with aviation safety standards."
              />
              <ResumeCard
                title="Apprentice"
                subTitle="Kenya Civil Aviation Authority, Nairobi, Kenya"
                result="Completed"
                des="Assisted in preparing special flight permits and conducted inspections for certification and approval. Ensured compliance with airworthiness regulations through detailed inspections and documentation."
              />
              <ResumeCard
                title="Aeronautical Engineering Graduate"
                subTitle="East African School of Aviation"
                result="Graduated"
                des="Graduated with a diploma in Aeronautical Engineering, with a focus on aircraft systems, gas turbines, propeller systems, and electrical systems."
              />
            </div>
          </div>
        </motion.div>
      );
}

export default Achievement;
