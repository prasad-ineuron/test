import React from "react";

interface JobProp {
  title: string;
  time: string;
  category: string;
  location: string;
  description: string;
}

const JobCard: React.FC<JobProp> = ({
  title,
  time,
  category,
  location,
  description,
}) => {
  return (
    <>
      <div
        className="p-4 rounded-lg"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <h1 className="font-semibold text-lg">{title}</h1>
        <div className="flex gap-1 mt-2">
          <p className="text-[12px] bg-red-300 inline-block py-1 px-2 rounded-full">
            {time}
          </p>
          <p className="text-[12px] bg-red-300 inline-block py-1 px-2 rounded-full">
            {category}
          </p>
        </div>
        <p className="font-medium mt-2">{location}</p>
        <p className="text-sm font-normal mt-2">{description}</p>
        <button className="bg-black text-white py-2 px-5 rounded-lg mt-3">
          Apply
        </button>
      </div>
    </>
  );
};

export default JobCard;
