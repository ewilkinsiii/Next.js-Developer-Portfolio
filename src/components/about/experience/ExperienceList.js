import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = (props) => {
  const { items } = props;
  return (
    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
      {items.map((experience) => (
        <ExperienceItem
          key={experience.id}
          id={experience.id}
          position={experience.position}
          company={experience.company}
          companyLink={experience.companyLink}
          time={experience.time}
          address={experience.address}
          description={experience.description}
        />
      ))}
    </ul>
  );
};

export default ExperienceList;
