import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
          {/* part one */}
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
              <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
              <ResumeCard
                title="Diploma in FullStack Development"
                subTitle="Institute of Software Technologies (2023-2024)"
                result="Merit"
                des="Learned software development methodologies, coding languages, and application development. Worked on various projects utilizing modern technologies and frameworks."
              />
               <ResumeCard
              title="Diploma in Aeronautical Engineering (Airframes & Engines)"
              subTitle="East African School of Aviation (2019-2022)"
              result="Distinction"
              des="Specialized in the maintenance, repair, and overhaul of aircraft airframes and engines. Gained hands-on experience with various aircraft systems and components."
            />
              <ResumeCard
                title="Secondary School Education"
                subTitle="Kangaru School (2014 - 2017)"
                result="merit"
                des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
              />

            </div>
          </div>
          {/* part Two */}
    
          <div>
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
              <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Software Developer"
              subTitle="REMOTE"
              result="Jan 2024 - Present"
              des="Developed and maintained web applications using MERN stack. Collaborated with cross-functional teams to design and implement new features. Improved application performance and scalability, contributing to enhanced user experience and operational efficiency."
            />
                <ResumeCard
              title="Aircraft Maintenance Technician"
              subTitle="NATIONAL AIR SUPPORT DEPARTMENT (Nairobi)"
              result="16/01/2023 - 14/04/2023"
              des="Completed scheduled maintenance checks of different aircraft and their engines, which included, Cessna; C- 152, C-172, C-180, C-182, C-206, C-208, Husky, Bell 206 L-4,Bell 407 Euro copter AS350 and Robinson R-44 helicopter to comply with aviation laws and regulations."
            />
              <ResumeCard
              title="Airworthiness Intern"
              subTitle="KENYA CIVIL AVIATION AUTHORITY (Nairobi) "
              result="15/02/2021 - 14/05/2021"
              des=" Conducting inspections on aircraft, and training facilities for certification and approval purposes and preparing detailed reports on finding of such activities. Guiding industry and promoting compliance with Airworthiness regulations and associated publications."
            />
            </div>
          </div>
        </motion.div>
      );
}

export default Education
