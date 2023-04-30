import React, { Fragment, useRef } from "react";
import LiIcon from "./LiIcon";
import { motion, useScroll } from "framer-motion";

const ExperienceItem = (props) => {
  //props position, company, companyLink, time, address, description
  const ref = useRef(null);
  return (
    <Fragment>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] 
          mx-auto flex flex-col items-center justify-between
          md:w-[80%]"
        //key={props.id}
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {props.position}&nbsp;
            <a
              href={props.companyLink}
              target="_blank"
              className="text-primary capitalize dark:text-primaryDark"
            >
              @{props.company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {props.time} | {props.address}
          </span>
          <p className="font-medium w-full md:text-sm">{props.description}</p>
        </motion.div>
      </li>
    </Fragment>
  );
};

export default ExperienceItem;
