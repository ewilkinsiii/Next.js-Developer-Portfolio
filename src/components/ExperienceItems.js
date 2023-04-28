import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const ExperienceItems = (props) => {
  //props position, company, companyLink, time, address, work
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt0 last:mb-0 w-[60%] 
        mx-auto flex flex-col items-center justify-center"
      //key={props.id}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {props.position}&nbsp;
          <a
            href={props.companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{props.company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {props.time} | {props.address}
        </span>
        <p className="font-medium w-full">{props.work}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceItems;
