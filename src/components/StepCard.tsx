import { Link } from "gatsby";
import React from "react";
import { FaAmazon, FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
}

const StepCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <>
      <div
        className="w-[300.58px] h-[377.31px] py-3 rounded-lg"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="w-[260px] mx-auto">
          <span className="w-10 h-10 rounded-full bg-[#BBFFD2] flex justify-center items-center text-black">
            <FaAmazon className="text-3xl" />
          </span>
          <h1 className="font-sans font-bold mt-2 ">Amazon</h1>
          <h2 className="font-sans font-bold mt-2 text-xl">
            Software Developer
          </h2>
          <p className="bg-[#BBFFD2] py-1 px-2 rounded-full inline-block text-[12px] mt-2">
            Full Time
          </p>
          <p className="font-medium font-sans text-lg mt-2">Bengalore, India</p>
          <p className="mt-2 text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            accusamus praesentium maxime maiores architecto eum magni? Ipsam
            minus obcaecati minima?
          </p>
          <button className="bg-[#0D3934] py-2 px-4 rounded-lg mt-4 text-white font-semibold text-sm">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default StepCard;
