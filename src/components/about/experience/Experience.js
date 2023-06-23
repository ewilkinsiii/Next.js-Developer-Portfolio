import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import getAllExperiences from "../../../../dummy data/experience";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  const experiences = getAllExperiences();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ExperienceList items={experiences} />
      </div>
    </div>
  );
};

export default Experience;
