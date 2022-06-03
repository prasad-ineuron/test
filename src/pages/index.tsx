// import { PageProps } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import { FaArrowRight, FaBlackTie } from "react-icons/fa";
import ComapanyCard from "../components/CompaniesCard";
import JobCard from "../components/JobCard";
import Layout from "../components/layout";
import SectionHeader from "../components/SectionHeader";
import StepCard from "../components/StepCard";

const step = [
  {
    title: "Register for a Job",
    description: "Top companies in India",
  },
  {
    title: "Give a mock Interview",
    description: "Automated mock interviews",
  },
  {
    title: "Take interviews with Companies",
    description: "1:1 Interview with Company",
  },
];

const IndexPage = () => {
  return (
    <Layout
      bodyClasses="overflow-x-hidden"
      meta={{
        title: "Home",
      }}
    >
      <div className="w-full h-full">
        <section aria-label="hero-section" className="border-b pb-10">
          <div className="flex justify-between items-center lg:gap-[140px]">
            <div className="w-1/2 relative">
              <p className="text-2xl text-[#037668] font-medium font-sans">
                Apply to your dream company
              </p>
              <h1 className="text-[48px] leading-[52px] font-bold mt-6 font-sans-2">
                Explore More than 70000+ Jobs, which helps to build your{" "}
                <span className="text-[#037668]">bright career</span>
              </h1>
              <button className="bg-[#0D3934] py-[14.88px] px-[39.23px] text-white font-medium font-sans rounded-lg mt-6">
                Explore Jobs
              </button>
              <span className="absolute -top-10 right-0">
                <svg
                  width="213"
                  height="131"
                  viewBox="0 0 213 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.1134 25.0023C48.1734 27.2853 46.4334 29.7453 44.9534 32.3643C44.2934 33.5303 43.1334 36.0083 42.9534 38.1333C42.7534 40.3973 43.5233 42.3073 45.5033 43.3133C48.1333 44.6473 50.2334 44.5083 51.8534 43.7013C53.4134 42.9263 54.6333 41.4033 55.4033 39.3613C56.8733 35.4583 56.6533 29.4933 55.8833 26.0893C57.9533 23.9533 60.2233 22.0163 62.6533 20.2943C80.7533 7.46929 107.303 12.1983 127.733 31.3743C134.883 38.0883 138.323 52.1883 140.113 67.4013C142.903 91.0883 141.313 117.544 141.093 125.295C141.043 127.209 141.223 128.345 141.323 128.572C141.793 129.688 142.623 129.978 143.203 130.088C144.043 130.238 144.713 130.078 145.253 129.798C145.983 129.414 146.583 128.738 146.863 127.695C147.013 127.119 147.053 126.317 147.033 125.462C147.013 124.869 146.893 124.221 147.013 123.796C147.793 121.074 148.733 118.416 149.653 115.739C152.723 106.74 156.693 98.3073 161.103 89.8843C175.113 63.1203 188.663 34.8413 211.633 14.4503C212.663 13.5353 212.763 11.9533 211.843 10.9213C210.933 9.88931 209.353 9.79529 208.313 10.7113C184.883 31.5053 170.963 60.2713 156.673 87.5653C152.923 94.7303 149.483 101.905 146.623 109.41C146.913 96.1343 146.803 77.7573 144.373 61.4973C142.213 47.0363 138.103 34.2563 131.153 27.7293C108.773 6.72229 79.5833 2.16531 59.7633 16.2153C57.6433 17.7193 55.6234 19.3733 53.7434 21.1673C43.3734 2.44234 21.1733 -5.06271 1.55334 3.89329C0.293337 4.46629 -0.256653 5.95031 0.313347 7.20531C0.893347 8.46031 2.37329 9.01433 3.63329 8.44133C21.3133 0.371328 41.3634 7.5733 50.1134 25.0023ZM51.5633 31.2713C50.7533 32.4153 50.0033 33.6013 49.3033 34.8273C48.9333 35.4853 48.2933 36.7503 48.0233 37.9883C47.9633 38.2783 47.9534 38.7323 47.9534 38.9423C48.6434 39.2823 49.1833 39.4463 49.6233 39.2253C50.1733 38.9533 50.4534 38.3133 50.7234 37.5983C51.4034 35.8043 51.6233 33.4263 51.5633 31.2713Z"
                    fill="#00634B"
                  />
                </svg>
              </span>
              <span className="absolute -bottom-24 -left-14">
                <svg
                  width="316"
                  height="54"
                  viewBox="0 0 316 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M114.02 0.855387C90.2139 1.95063 44.5031 12.0188 1.50526 25.6377C-1.96208 26.736 -6.53 28.1838 -8.64567 28.855C-37.1745 37.9071 -52.5176 43.6156 -63.2573 49.1741C-67.4486 51.3435 -67.8087 51.6065 -67.6978 52.4171C-67.5358 53.5999 -66.8539 53.4172 -59.0766 50.1074C-51.0287 46.6826 -43.8153 44.1957 -24.0323 38.0259C42.0865 17.405 72.9689 9.84534 107.609 5.80189C114.397 5.00943 125.24 5.14743 125.24 6.02615C125.24 7.19991 118.439 11.2029 102.694 19.2973C83.3237 29.2556 71.5317 35.8613 70.4874 37.3394C68.7029 39.8649 70.6656 41.6874 74.9125 41.4486C77.3393 41.3121 77.8905 41.2088 89.017 38.8055C120.962 31.9054 141.379 28.4034 169.049 25.0777C211.186 20.0128 238.034 18.1444 288.51 16.7634C306.647 16.2673 307.585 16.1981 310.932 15.1119C312.223 14.6932 313.764 14.284 314.357 14.2024C315.748 14.0116 315.731 13.7674 314.314 13.5873C313.697 13.5088 312.279 13.1342 311.162 12.7546C308.409 11.8189 306.584 11.77 290.86 12.2106C238.149 13.6873 210.414 15.5759 170.224 20.4249C149.088 22.975 139.669 24.3606 124.278 27.1845C113.756 29.1149 85.9837 34.7349 82.0932 35.7206C79.9705 36.2585 89.1847 31.1844 105.369 22.9031C125.842 12.4275 129.918 9.58238 129.937 5.755C129.958 1.43906 126.237 0.293612 114.02 0.855387Z"
                    fill="#00634B"
                  />
                </svg>
              </span>
            </div>
            <div className="relative w-1/2 h-[500px] flex justify-center items-end -mt-[50px]">
              {/* <img src="/static/hero.jpg" alt="" className="h-[500px] w-full" /> */}

              <span className="relative w-[400px] h-[300px] rounded-2xl bg-[#037668] overflow-visible ">
                <span className="bg-[#BBFFD2] w-[450px] h-[450px] absolute rounded-full -top-[148px] -left-[100px] opacity-40 "></span>
                <span className="bg-[#0D3934] w-[150px] h-[50px] absolute rounded-xl -right-20 -top-8">
                  <p className="text-white text-2xl font-sans font-semibold py-2 px-3">
                    1000+ Jobs
                  </p>
                </span>
                <span
                  className="bg-white w-[150px] h-[100px] absolute -left-20  bottom-0 rounded-xl font-semibold text-xl px-6 py-9"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                  Some Text
                </span>
              </span>
              <span className="absolute z-50">
                <img
                  src="/static/new-hero.png"
                  alt="new-hero-image"
                  className="h-[500px]"
                />
              </span>
            </div>
          </div>
        </section>
        {/* Steps Section */}
        <section aria-label="companies">
          <div className="grid grid-cols-3 gap-24 w-full mt-[150px]">
            {step.map((x, i) => {
              return (
                <ComapanyCard
                  title={x.title}
                  description={x.description}
                  key={i}
                />
              );
            })}
          </div>
        </section>
        {/* Job cards Section */}
        <section aria-label="next-job" className="mt-40">
          <SectionHeader
            title="Newest Job Listing"
            description="Narrow down your application  and let the most appealing  and matching companies show off"
            bodyClasses=""
          />
          <div className="grid grid-cols-4 gap-10 w-full mt-[60px]">
            {[...Array(4)].map((x, i) => {
              return (
                <StepCard
                  title="Some String"
                  description="hjdfshfjsdhjfhsdjkhfj"
                  key={i}
                />
              );
            })}
          </div>
          <div className="flex justify-end mt-6 mr-6">
            <Link to="/">
              <span className="flex items-center space-x-2">
                <span className="text-lg">View all</span>
                <span>
                  <FaArrowRight className="text-[#0D3934]" />
                </span>
              </span>
            </Link>
          </div>
        </section>
        {/* Perfecct for candidates section */}
        <section arai-label="perfect-candidates-banner">
          <div className="w-full min-h-min mt-40">
            <div className="grid grid-cols-2 gap-10">
              {/* left image */}
              <div className="p-4">
                {/* image goes here */}
                <img src="/static/iterview.jpg" alt="Interview-image" />
                {/* <div className="bg-gray-500 h-full"></div> */}
              </div>
              {/* Right text */}
              <div className="p-4">
                <h1 className="font-semibold text-4xl font-sans-2">
                  Perfect for Candidates
                </h1>
                <h1 className="font-semibold text-4xl font-sans-2">
                  Beautiful for{" "}
                  <span className="text-[#037668]">Employers.</span>
                </h1>
                <div className="grid grid-cols-2 gap-6 mt-14">
                  {[...Array(4)].map((x, i) => {
                    return (
                      <>
                        <div
                          className="p-3 rounded-lg"
                          style={{
                            boxShadow:
                              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                          }}
                        >
                          <div className="w-10 h-10">
                            <FaBlackTie className="w-10 h-10 text-[#037668]" />
                          </div>
                          <h6 className="font-semibold text-xl mt-2">
                            Profile Highlights
                          </h6>
                          <p className="font-regular text-sm mt-1">
                            Get highlighted by the company that you want to work
                            for
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
