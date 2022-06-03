import { Link } from "gatsby";
import React from "react";
import { DUMMY_PROFILE } from "../constants";

interface Links {
  label: String;
  href: "/";
}

const Links: Links[] = [
  {
    label: "Candidates",
    href: "/",
  },
  {
    label: "Companies",
    href: "/",
  },
  {
    label: "How it works",
    href: "/",
  },
  {
    label: "CV Builder",
    href: "/",
  },
];

const Header: React.FC = () => {
  return (
    <>
      <header className="flex flex-row h-[75px] px-14 bg-[#FAFDFB] text-black justify-between items-center ">
        <div className="flex md:justify-start justify-between w-full items-center gap-10 z-50">
          <Link className="text-2xl font-sans-2 font-semibold" to="/">
            FindJobs.io
          </Link>
          <nav className="md:flex flex-grow justify-center items-center gap-6 hidden">
            {Links.map((navLink, i) => {
              return (
                <Link key={i} className="text-black" to={navLink.href}>
                  {navLink.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="md:flex justify-end gap-6 items-center hidden">
          <Link to="/auth/signin">
            <button className="text-[#037668] text-md py-[6.28px] px-[23.25px] rounded-lg border border-[#037668]">
              Login
            </button>
          </Link>
          <Link to="/auth/login">
            <button className="text-[#FFFFFF] text-md py-[6.28px] px-[23.25px] rounded-lg bg-[#037668]">
              SignUp
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
