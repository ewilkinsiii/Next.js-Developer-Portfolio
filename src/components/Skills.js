import React, { Fragment } from "react";
import { motion } from "framer-motion";
import SkillItems from "./SkillItems";

const Skills = () => {
  return (
    <Fragment>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        {" "}
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full 
      bg-brain lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] bg-auto bg-no-repeat bg-center
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
        <SkillItems name="Postgres SQL" x="-15vw" y="12vw" />
        <SkillItems name="GraphQL" x="-10vw" y="-10vw" />
        <SkillItems name="Ruby on Rails" x="-15vw" y="-5vw" />
        <SkillItems name="Git" x="-10vw" y="00vw" />
        <SkillItems name="CSS" x="15vw" y="-10vw" />
        <SkillItems name="Javascript" x="20vw" y="6vw" />
        <SkillItems name="ReactJS" x="5vw" y="12vw" />
        <SkillItems name="NextJS" x="-10vw" y="-15vw" />
        <SkillItems name="Web Design" x="15vw" y="-5vw" />
        <SkillItems name="Figma" x="5vw" y="-15vw" />
        <SkillItems name="Firebase" x="-5vw" y="18vw" />
        <SkillItems name="Tailwind CSS" x="16vw" y="18vw" />
      </div>
    </Fragment>
  );
};

export default Skills;
