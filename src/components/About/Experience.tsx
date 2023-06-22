'use client';
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./Lilcon";

type DetailsProps = {
  position: string,
  company: string,
  time: string,
  work: string
}

const Details = ({ position, company, time, work }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <span
            className="text-primary dark:text-primaryDark capitalize"
          >
            {company}
          </span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="font-medium w-full md:text-sm" dangerouslySetInnerHTML={{ __html: work }}/>
      </motion.div>
    </li>
  );
};

const Experience = ({ data }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  console.log(data)
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {
            data.map((content: any) => {
              return (
                <React.Fragment key={content.id}>
                  <Details
                    position={content.attributes.jobTitle}
                    company={content.attributes.companyName}
                    time={content.attributes.employmentDuration}
                    work={content.attributes.description}
                  />
                </React.Fragment>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Experience;
