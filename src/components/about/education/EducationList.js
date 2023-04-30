import React from "react";
import EducationItem from "./EducationItem";

const EducationList = (props) => {
  const { items } = props;
  return (
    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
      {items.map((item) => (
        <EducationItem
          key={item.id}
          type={item.type}
          time={item.time}
          place={item.place}
          info={item.info}
        />
      ))}
    </ul>
  );
};

export default EducationList;
