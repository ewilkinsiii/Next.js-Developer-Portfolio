import React from "react";
import { motion } from "framer-motion";
import SkillItems from "./SkillItems";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        {" "}
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center 
          rounded-full font-semibold bg-dark text-light 
          p-8 shadow-dark cursor-pointer  dark:bg-light dark:text-dark
          lg:p-6 md:p-4 xs:text-sm xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <SkillItems name="HTML" x="-25vw" y="2vw" />
        <SkillItems name="CSS" x="-5vw" y="-10vw" />
        <SkillItems name="Javascript" x="20vw" y="6vw" />
        <SkillItems name="ReactJS" x="0vw" y="12vw" />
        <SkillItems name="NextJS" x="20vw" y="-15vw" />
        <SkillItems name="Web Design" x="32vw" y="-5vw" />
        <SkillItems name="Figma" x="0vw" y="-20vw" />
        <SkillItems name="Firebase" x="-25vw" y="18vw" />
        <SkillItems name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
