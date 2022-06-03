import React from "react";
import { FaKeyboard } from "react-icons/fa";

interface StepProps {
  title: string;
  description: string;
}

const ComapanyCard: React.FC<StepProps> = ({ title, description }) => {
  return (
    <div
      className={`h-[187px] rounded-lg fles justify-center items-center flex-col text-center gap-4 border-[0.1px] bg-white`}
      style={{ boxShadow: "22px 37px 52px rgba(160, 160, 160, 0.12)" }}
    >
      <span className="inline-flex justify-center items-center w-[100px] h-[100px] rounded-full bg-[#037668] -mt-14">
        <FaKeyboard className="text-4xl text-white font-semibold" />
      </span>
      <h6 className="mt-[30px] text-[#037668] font-semibold font-sans-2 text-2xl ">
        {title}
      </h6>
      <p className="mt-2 text-sm font-regular">{description}</p>
    </div>
  );
};

export default ComapanyCard;
