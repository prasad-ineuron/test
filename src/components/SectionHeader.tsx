import { Link } from "gatsby";
import React from "react";

const SectionHeader: React.FC<{
  title: string;
  description: string;
  href?: string;
  bodyClasses: string;
}> = ({ title, description, href, bodyClasses }) => {
  return (
    <div
      className={
        `flex justify-start items-start flex-col mt-[97px]` + bodyClasses
      }
    >
      <div className="flex justify-between items-center w-full mb-[16px]">
        <h1 className="text-4xl font-semibold font-sans-2">{title}</h1>
        {href && (
          <Link to={href} className="">
            <button className="bg-[#00634B] text-white font-medium py-2 px-3 rounded-lg">
              View More
            </button>
          </Link>
        )}
      </div>
      {description && (
        <div>
          <p className="text-lg -mt-3 font-regular font-sans">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
